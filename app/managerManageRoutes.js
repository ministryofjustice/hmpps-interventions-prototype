const express = require("express");
const router = express.Router();
const moment = require("moment");
const staticData = require("./data/managerManageStaticData");

router.use(function (req, res, next) {
  res.locals.serviceName = "Manage intervention referrals";
  next();
});

router.get("/referrals", (req, res) => {
  res.render("book-and-manage/manage-a-referral/manager/referrals", {
    probationPractitioners: staticData.probationPractitioners,
  });
});

router.get("/referrals/:referralIndex", (req, res) => {
  const serviceUser = staticData.serviceUsers[req.params.referralIndex];

  res.render("book-and-manage/manage-a-referral/manager/referral", {
    serviceUser,
  });
});

module.exports = router;
