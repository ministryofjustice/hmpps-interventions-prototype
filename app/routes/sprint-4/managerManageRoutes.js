const express = require("express");
const router = express.Router();
const moment = require("moment");

router.use(function (req, res, next) {
  res.locals.serviceName = "Receive intervention referrals";
  res.locals.serviceHref =
    "/sprint-4/book-and-manage/manage-a-referral/manager/dashboard";
  next();
});

router.get("/dashboard", (req, res) => {
  res.locals.serviceName = "Access interventions and services";
  res.render("sprint-4/book-and-manage/manage-a-referral/manager/dashboard");
});

router.get("/referrals", (req, res) => {
  res.render("sprint-4/book-and-manage/manage-a-referral/manager/referrals", {
    referrals: req.session.data.sprint4.referrals,
  });
});

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex",
  (req, res) => {
    const referralIndex = req.params.referralIndex;
    const interventionIndex = req.params.interventionIndex;

    const referral = req.session.data.sprint4.referrals[referralIndex];
    const serviceUser = referral.serviceUser;
    const intervention = referral.interventions[interventionIndex];
    const caseworkers = req.session.data.sprint4.caseworkers;
    const reassign = req.query.reassign;
    const currentCaseworker = { name: req.session.data["assigned-caseworker"] };
    const probationOfficer = referral.probationPractitioner;

    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/intervention",
      {
        referralIndex,
        interventionIndex,
        serviceUser,
        intervention,
        caseworkers,
        reassign,
        currentCaseworker,
        probationOfficer,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/confirm-details",
  (req, res) => {
    const referralIndex = req.params.referralIndex;
    const interventionIndex = req.params.interventionIndex;
    const referral = req.session.data.sprint4.referrals[referralIndex];
    const serviceUser = referral.serviceUser;
    const intervention = referral.interventions[interventionIndex];
    const probationOfficer = referral.probationPractitioner;

    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/confirm-details",
      {
        referralIndex,
        serviceUser,
        intervention,
        probationOfficer,
      }
    );
  }
);

router.get("/referrals/:referralIndex/caseworker-confirmation", (req, res) => {
  const referral = req.session.data.sprint4.referrals[req.params.referralIndex];
  const referralNumber = referral.referralNumber;
  res.render(
    "sprint-4/book-and-manage/manage-a-referral/manager/caseworker-email-confirmation",
    {
      referralNumber,
    }
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
