const express = require("express");
const HmppsOffenderAssessmentApi = require("hmpps_offender_assessment_api");
const moment = require("moment");
const axios = require("axios");

const router = express.Router();

// Add your routes here - above the module.exports line

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

router.get("/found-service-user", async function (req, res, next) {
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

    res.render("found-service-user", {
      offender: offender,
      predictors: latestPredictors,
      assessment: assessment,
      moment: moment,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
