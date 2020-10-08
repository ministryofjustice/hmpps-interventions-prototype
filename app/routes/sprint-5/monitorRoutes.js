const express = require("express");
const router = express.Router();

const findReferral = (referrals, referralNumber) =>
  referrals.find((referral) => referralNumber === referral.reference);

const sortByDateAndTime = (a, b) =>
  a.date < b.date ? 1 : a.date === b.date ? (a.time < b.time ? 1 : -1) : -1;

const groupBy = (items, key, sortingFunction = sortByDateAndTime) =>
  items.sort(sortingFunction).reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

router.get("/cases", (req, res) => {
  const referrals = req.session.data.sprint5.referrals;
  const referralsWithSomeUnassigned = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) => !intervention.monitor.assigned
    );
  });

  const referralsAwaitingAssessment = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.monitor.assigned &&
        !intervention.monitor.actionPlanSubmitted
    );
  });

  const referralsWithActionPlan = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.monitor.actionPlanSubmitted &&
        !intervention.monitor.inProgress &&
        !intervention.monitor.completed
    );
  });
  const referralsInProgress = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.monitor.inProgress &&
        !intervention.monitor.overdue &&
        !intervention.monitor.completed
    );
  });

  const referralsOverdue = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) =>
        intervention.monitor.inProgress &&
        intervention.monitor.overdue &&
        !intervention.monitor.completed
    );
  });

  const referralsCompleted = referrals.filter((referral) => {
    return referral.interventions.some(
      (intervention) => intervention.monitor.completed
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
  const notifications = req.session.data.sprint5.notifications;

  const notificationsByType = notifications.sort((a, b) =>
    a.type > b.type ? 1 : -1
  );

  const notificationsByDate = groupBy(notifications, "date");
  console.log(notificationsByDate);

  const notificationsByServiceUser = groupBy(notifications, "serviceUser");

  const notificationsByPriority = groupBy(notifications, "priority");

  res.render("sprint-5/monitor/notifications", {
    notifications: notifications,
    notificationsByDate: notificationsByDate,
    notificationsByType: notificationsByType,
    notificationsByServiceUser: notificationsByServiceUser,
    priorityNotifications: notificationsByPriority.true,
    nonPriorityNotifications: notificationsByPriority.false,
    sortBy: req.query.sort_by,
    currentPage: "notifications",
  });
});

router.get("/cases/:referralNumber/service-user", (req, res) => {
  const referralNumber = req.params.referralNumber;

  const referral = findReferral(
    req.session.data.sprint5.referrals,
    referralNumber
  );

  const serviceUser = referral ? referral.serviceUser : {};

  res.render("sprint-5/monitor/cases/service-user", {
    referral: referral,
    serviceUser: serviceUser,
  });
});

router.get(
  "/cases/:referralNumber/interventions/:interventionId",
  (req, res) => {
    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const referral = findReferral(
      req.session.data.sprint5.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    const serviceUser = referral ? referral.serviceUser : {};

    res.render("sprint-5/monitor/cases/intervention", {
      referral: referral,
      intervention: intervention,
      serviceUser: serviceUser,
      currentPage: intervention.name,
    });
  }
);

module.exports = router;
