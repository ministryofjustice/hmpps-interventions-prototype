const express = require("express");
const communityAPIClient = require("../lib/community_api_client.js");
const hmppsOauthClient = require("../lib/hmpps_oauth_client.js");
const moment = require("moment");
const router = express.Router();

// Make Moment.js available to all views (we use it for date formatting quite a
// bit)
router.use((req, res, next) => {
  res.locals.moment = moment;
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

const sprints = ["sprint-3", "sprint-4"];
const sprintRouters = {};
for (sprint of sprints) {
  router.use(
    `/${sprint}/book-and-manage/manage-a-referral/caseworker`,
    require(`./routes/${sprint}/caseworkerManageRoutes`),
  );

  router.use(
    `/${sprint}/book-and-manage/manage-a-referral/manager`,
    require(`./routes/${sprint}/managerManageRoutes`),
  );
}

// Add your routes here - above the module.exports line

module.exports = router;
