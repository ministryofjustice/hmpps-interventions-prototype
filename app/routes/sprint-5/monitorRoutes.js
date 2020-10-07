const express = require("express");
const router = express.Router();

router.get("/cases", (req, res) => {
  const referrals = req.session.data.sprint5.referrals;
  const referralsWithSomeUnassigned = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) => !intervention.assigned
    );
  });

  const referralsAwaitingAssessment = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.assigned && !intervention.actionPlanSubmitted
    );
  });

  const referralsWithActionPlan = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.actionPlanSubmitted &&
        !intervention.inProgress &&
        !intervention.completed
    );
  });
  const referralsInProgress = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.inProgress &&
        !intervention.overdue &&
        !intervention.completed
    );
  });

  const referralsOverdue = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.inProgress &&
        intervention.overdue &&
        !intervention.completed
    );
  });

  const referralsCompleted = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) => intervention.completed
    );
  });

  res.render("sprint-5/monitor/cases", {
    referrals: req.session.data.sprint5.referrals,
    referralsWithSomeUnassigned: referralsWithSomeUnassigned,
    referralsAwaitingAssessment: referralsAwaitingAssessment,
    referralsWithActionPlan: referralsWithActionPlan,
    referralsInProgress: referralsInProgress,
    referralsOverdue: referralsOverdue,
    referralsCompleted: referralsCompleted,
    groupBy: req.query.group_by,
    currentPage: "cases",
  });
});

router.get("/notifications", (req, res) => {
  res.render("sprint-5/monitor/notifications", {
    notifications: req.session.data.sprint5.notifications,
    sortBy: req.query.sort_by,
    currentPage: "notifications",
  });
});

router.get("/cases/:referralNumber/service-user", (req, res) => {
  const referralNumber = req.params.referralNumber;

  const referral = req.session.data.sprint5.referrals.find(
    (referral) => referral.reference == referralNumber
  );

  const serviceUser = referral ? referral.serviceUser : {};

  res.render("sprint-5/monitor/cases/service-user", {
    referral: referral,
    serviceUser: serviceUser,
  });
});

module.exports = router;
