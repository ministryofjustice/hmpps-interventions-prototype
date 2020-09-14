const express = require("express");
const communityAPIClient = require("../lib/community_api_client.js");
const hmppsOauthClient = require("../lib/hmpps_oauth_client.js");
const router = express.Router();
const caseworkerManageRouter = require('./caseworkerManageRoutes')

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

router.use("/book-and-manage/manage-a-referral/caseworker", caseworkerManageRouter);

// Add your routes here - above the module.exports line

module.exports = router
