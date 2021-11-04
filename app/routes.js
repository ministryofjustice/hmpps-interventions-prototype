const express = require("express");
const communityAPIClient = require("../lib/community_api_client.js");
const hmppsOauthClient = require("../lib/hmpps_oauth_client.js");
const moment = require("moment");
const HmppsOffenderAssessmentApi = require("hmpps_offender_assessment_api");
const axios = require("axios");
const router = express.Router();

// Make Moment.js available to all views (we use it for date formatting quite a
// bit)
router.use((req, res, next) => {
  res.locals.moment = moment;
  next();
});

// In sprint 6 & beyond, everything is extra-wide
const wideSprints = ["sprint-6", "sprint-7", "beta-sprint-1", "beta-sprint-2"];
for (sprint of wideSprints) {
  router.get(`/${sprint}/*`, function (req, res, next) {
    res.locals.extraWide = true;
    next();
  });
}

router.get("/*/book-and-manage/make-a-referral(/*)?", function (
  req,
  res,
  next
) {
  res.locals.serviceName = "Make a referral";
  next();
});

router.get("/*/find-an-intervention(/*)?", function (req, res, next) {
  res.locals.serviceName = "HMPPS - Find an intervention";
  next();
});

router.get("/service-user-details/show", async function (req, res, next) {
  try {
    // We create a new auth token on every request - not sure if this is what we'd do in production but it's the easiest way to avoid token expiry.
    const authToken = await hmppsOauthClient.getHMPPSAuthToken();
    const crn = req.query.crn;

    const serviceUserDetails = await communityAPIClient.getServiceUserDetailsByCRN(
      crn,
      authToken
    );

    res.render("service-user-details/show", {
      serviceUser: serviceUserDetails,
    });
  } catch (error) {
    next(error);
  }
});

const sprints = [
  "sprint-3",
  "sprint-4",
  "sprint-5",
  "sprint-6",
  "sprint-7",
  "beta-sprint-1",
  "beta-sprint-2"
];
for (sprint of sprints) {
  router.use(
    `/${sprint}/book-and-manage/manage-a-referral/caseworker`,
    require(`./routes/${sprint}/caseworkerManageRoutes`)
  );

  router.use(
    `/${sprint}/book-and-manage/manage-a-referral/manager`,
    require(`./routes/${sprint}/managerManageRoutes`)
  );
}

const findSprints = ["sprint-6", "sprint-7", "beta-sprint-1", "beta-sprint-2"];
for (sprint of findSprints) {
  router.use(
    `/${sprint}/book-and-manage/make-a-referral/find-an-intervention`,
    require(`./routes/${sprint}/findAReferralRoutes`)
  );
}

const monitorSprints = ["sprint-5", "sprint-6", "sprint-7", "beta-sprint-1", "beta-sprint-2"];
for (sprint of monitorSprints) {
  router.use(`/${sprint}/monitor`, require(`./routes/${sprint}/monitorRoutes`));
}

router.use(
  "/refer-and-monitor/ur-testing/urgent-referrals",
  require(`./routes/refer-and-monitor/managerManageRoutes`)
);

async function createAuthenticatedApiClient() {
  const client = new HmppsOffenderAssessmentApi.ApiClient();

  // For some reason the default basePath is https, which doesn't work
  client.basePath = "http://localhost:8080";

  // https://github.com/ministryofjustice/offender-assessments-api-kotlin/#oauth-security
  const authTokenResponse = await axios.post(
    "http://localhost:9090/auth/oauth/token?grant_type=client_credentials",
    {},
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          "sentence-plan-api-client:clientsecret",
          "utf8"
        ).toString("base64")}`,
      },
    }
  );

  client.authentications.spring_oauth.accessToken =
    authTokenResponse.data.access_token;

  return client;
}

router.get("/service-user-assessments/show", async function (req, res, next) {
  try {
    // We create a new auth token on every request - not sure if this is what we'd do in production but it's the easiest way to avoid token expiry.
    const client = await createAuthenticatedApiClient();

    const crn = req.query.crn;

    // This gives data about the offender
    const offendersApi = new HmppsOffenderAssessmentApi.OffendersApi(client);
    const offenderPromise = offendersApi.getOffenderByPkUsingGET(crn, "crn");

    // This gives risk predictors
    const predictorsApi = new HmppsOffenderAssessmentApi.OffenderOGPOGRsOVPPredictorsApi(
      client
    );
    const predictorsPromise = predictorsApi.getPredictorScoresForOasysOffenderIdUsingGET(
      crn,
      "crn"
    );

    // We want the latest assessment so that we can pull criminogenic needs
    const assessmentsApi = new HmppsOffenderAssessmentApi.AssessmentsApi(
      client
    );
    const assessmentPromise = assessmentsApi.getAssessmentUsingGET1(
      crn,
      "crn",
      {}
    );

    result = await Promise.all([
      offenderPromise,
      predictorsPromise,
      assessmentPromise,
    ]);

    const offender = result[0];
    const predictors = result[1];
    const assessment = result[2];

    const latestPredictors = predictors
      .sort((a, b) => {
        return b.completedDate - a.completedDate;
      })
      .slice(-1)[0];

    res.render("service-user-assessments/show", {
      offender: offender,
      predictors: latestPredictors,
      assessment: assessment,
      moment: moment,
    });
  } catch (error) {
    next(error);
  }
});

// Add your routes here - above the module.exports line

module.exports = router;
