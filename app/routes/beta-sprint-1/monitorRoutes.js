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
  const referrals = req.session.data.betaSprint1.referrals;

  const unassignedReferrals = referrals
    .filter((referral) =>
      referral.interventions.some(
        (intervention) => !intervention.assignedCaseworker
      )
    )
    .map((referral) => {
      return {
        ...referral,
        interventions: referral.interventions.filter(
          (intervention) => !intervention.assignedCaseworker
        ),
      };
    });

  const referralsAwaitingAssessment = referrals
    .filter((referral) =>
      referral.interventions.some(
        (intervention) =>
          intervention.assignedCaseworker &&
          !intervention.monitor.actionPlanSubmitted
      )
    )
    .map((referral) => {
      return {
        ...referral,
        interventions: referral.interventions.filter(
          (intervention) =>
            intervention.assignedCaseworker &&
            !intervention.monitor.actionPlanSubmitted
        ),
      };
    });

  const referralsWithActionPlan = referrals
    .filter((referral) =>
      referral.interventions.some(
        (intervention) =>
          intervention.monitor.actionPlanSubmitted &&
          !intervention.monitor.inProgress &&
          !intervention.monitor.completed
      )
    )
    .map((referral) => {
      return {
        ...referral,
        interventions: referral.interventions.filter(
          (intervention) =>
            intervention.monitor.actionPlanSubmitted &&
            !intervention.monitor.inProgress &&
            !intervention.monitor.completed
        ),
      };
    });

  const referralsInProgress = referrals
    .filter((referral) =>
      referral.interventions.some(
        (intervention) =>
          intervention.monitor.inProgress &&
          !intervention.monitor.awaitingPostSessionQuestionnaire &&
          !intervention.monitor.overdue &&
          !intervention.monitor.completed
      )
    )
    .map((referral) => {
      return {
        ...referral,
        interventions: referral.interventions.filter(
          (intervention) =>
            intervention.monitor.inProgress &&
            !intervention.monitor.awaitingPostSessionQuestionnaire &&
            !intervention.monitor.overdue &&
            !intervention.monitor.completed
        ),
      };
    });

  const referralsAwaitingPostSessionQuestionnaire = referrals
    .filter((referral) =>
      referral.interventions.some(
        (intervention) =>
          intervention.monitor.inProgress &&
          intervention.monitor.awaitingPostSessionQuestionnaire &&
          !intervention.monitor.completed
      )
    )
    .map((referral) => {
      return {
        ...referral,
        interventions: referral.interventions.filter(
          (intervention) =>
            intervention.monitor.inProgress &&
            intervention.monitor.awaitingPostSessionQuestionnaire &&
            !intervention.monitor.completed
        ),
      };
    });

  const referralsCompleted = referrals
    .filter((referral) =>
      referral.interventions.some(
        (intervention) => intervention.monitor.completed
      )
    )
    .map((referral) => {
      return {
        ...referral,
        interventions: referral.interventions.filter(
          (intervention) => intervention.monitor.completed
        ),
      };
    });

  const count = (referrals) =>
    referrals.flatMap((referral) => referral.interventions).length;

  res.render("beta-sprint-1/monitor/cases", {
    referrals: req.session.data.betaSprint1.referrals,
    count: count,
    unassignedReferrals: unassignedReferrals,
    referralsAwaitingAssessment: referralsAwaitingAssessment,
    referralsWithActionPlan: referralsWithActionPlan,
    referralsInProgress: referralsInProgress,
    referralsAwaitingPostSessionQuestionnaire: referralsAwaitingPostSessionQuestionnaire,
    referralsCompleted: referralsCompleted,
    groupBy: req.query.group_by,
    currentPage: "cases",
  });
});

router.get("/notifications", (req, res) => {
  const notifications = req.session.data.betaSprint1.notifications;

  const notificationsByType = notifications.sort((a, b) =>
    a.type > b.type ? 1 : -1
  );

  const notificationsByDate = groupBy(notifications, "date");

  const notificationsByServiceUser = groupBy(notifications, "serviceUser");

  const notificationsByPriority = groupBy(notifications, "priority");

  res.render("beta-sprint-1/monitor/notifications", {
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
    req.session.data.betaSprint1.referrals,
    referralNumber
  );

  const serviceUser = referral ? referral.serviceUser : {};

  res.render("beta-sprint-1/monitor/cases/service-user", {
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
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    const serviceUser = referral ? referral.serviceUser : {};

    res.render("beta-sprint-1/monitor/cases/intervention", {
      referral: referral,
      intervention: intervention,
      serviceUser: serviceUser,
      currentPage: intervention.name,
    });
  }
);

router.get(
  "/cases/:referralNumber/interventions/:interventionId/action-plan",
  (req, res) => {
    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const referral = findReferral(
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    const serviceUser = referral ? referral.serviceUser : {};

    res.render("beta-sprint-1/monitor/cases/action-plan-review", {
      referral: referral,
      intervention: intervention,
      serviceUser: serviceUser,
      currentPage: intervention.name,
    });
  }
);

router.get(
  "/cases/:referralNumber/interventions/:interventionId/natasha-mackey-session-1",
  (req, res) => {
    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const referral = findReferral(
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    const serviceUser = referral ? referral.serviceUser : {};

    res.render("beta-sprint-1/monitor/cases/natasha-mackey-session-1", {
      referral: referral,
      intervention: intervention,
      serviceUser: serviceUser,
      currentPage: intervention.name,
    });
  }
);

router.get(
  "/cases/:referralNumber/interventions/:interventionId/sessions/:sessionId/absence-review",
  (req, res) => {
    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const referral = findReferral(
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    const serviceUser = referral ? referral.serviceUser : {};

    res.render("beta-sprint-1/monitor/cases/absence-review", {
      referral: referral,
      intervention: intervention,
      serviceUser: serviceUser,
      currentPage: intervention.name,
    });
  }
);

router.get(
  "/cases/:referralNumber/interventions/:interventionId/end-of-service-report",
  (req, res) => {
    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const referral = findReferral(
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    const serviceUser = referral ? referral.serviceUser : {};

    res.render("beta-sprint-1/monitor/cases/end-of-service-report", {
      referral: referral,
      intervention: intervention,
      serviceUser: serviceUser,
      currentPage: intervention.name,
    });
  }
);

router.post(
  "/cases/:referralNumber/interventions/:interventionId",
  (req, res) => {
    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const actionPlanApproved =
      req.session.data["approve-action-plan"] === "yes";

    const referral = findReferral(
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    intervention.monitor.actionPlanApproved = actionPlanApproved;

    res.redirect(
      `/beta-sprint-1/monitor/cases/${referralNumber}/interventions/${interventionId}`
    );
  }
);

router.get(
  "/cases/:referralNumber/interventions/:interventionId/fast-forward",
  (req, res) => {
    const toState = req.query.to;

    const referralNumber = req.params.referralNumber;
    const interventionId = req.params.interventionId;

    const referral = findReferral(
      req.session.data.betaSprint1.referrals,
      referralNumber
    );

    const intervention = referral.interventions.find(
      (intervention) => interventionId === intervention.id
    );

    switch (toState) {
      case "assignedCaseworker":
        intervention.assignedCaseworker = "Liam Johnson";
        break;
      case "initialAssessmentCompleted":
        intervention.monitor.initialAssessmentCompleted = true;
        break;
      case "actionPlanSubmitted":
        intervention.monitor.actionPlanSubmitted = true;
        break;
      case "inProgress":
        intervention.monitor.inProgress = true;
        break;
      case "completed":
        intervention.monitor.completed = true;
        break;
      case "endOfServiceReportSubmitted":
        intervention.monitor.endOfServiceReportSubmitted = true;
        break;
    }

    res.redirect(
      `/beta-sprint-1/monitor/cases/${req.params.referralNumber}/interventions/${req.params.interventionId}`
    );
  }
);

module.exports = router;
