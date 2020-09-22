const express = require("express");
const router = express.Router();
const moment = require("moment");
const staticData = require("../../data/sprint-4/managerManageStaticData");

router.use(function (req, res, next) {
  res.locals.serviceName = "Receive intervention referrals";
  next();
});

router.get("/referrals", (req, res) => {
  res.render("sprint-4/book-and-manage/manage-a-referral/manager/referrals", {
    probationPractitioners: staticData.probationPractitioners,
  });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex", (req, res) => {
  const serviceUser = staticData.serviceUsers[req.params.referralIndex];
  const intervention = serviceUser.interventions[req.params.interventionIndex];
  const caseworkers = staticData.caseworkers;
  const reassign = req.query.reassign;
  const currentCaseworker = { name: req.session.data['assigned-caseworker'] };

  res.render("sprint-4/book-and-manage/manage-a-referral/manager/intervention", {
    serviceUser,
    intervention,
    caseworkers,
    reassign,
    currentCaseworker,
  });
});

router.get("/referrals/:referralIndex/caseworker-confirmation", (req, res) => {
  res.render(
    "sprint-4/book-and-manage/manage-a-referral/manager/caseworker-email-confirmation"
  );
});

router.get("/referrals/:referralIndex/send-email", (req, res) => {
  res.render("sprint-4/book-and-manage/manage-a-referral/manager/send-email");
});

router.get(
  "/referrals/:referralIndex/probation-practitioner-email-confirmation",
  (req, res) => {
    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/probation-practitioner-email-confirmation"
    );
  }
);

module.exports = router;
