const express = require("express");
const router = express.Router();
const moment = require("moment");
const crypto = require("crypto");

// Configure the layout
router.use(function (req, res, next) {
  res.locals.serviceName = "Manage interventions and services";
  res.locals.serviceHref =
    "/sprint-7/book-and-manage/manage-a-referral/caseworker/dashboard";
  res.locals.loggedInUserName =
    req.session.data.sprint7.caseworkers[0].firstName;
  next();
});

function findReferral(req) {
  return findReferralByIndex(req, req.params.referralIndex);
}

function allReferrals(req) {
  referrals = [];
  for (i = 0; i < req.session.data.sprint7.referrals.length; i++) {
    referrals.push(findReferralByIndex(req, i));
  }
  return referrals;
}

function findReferralByIndex(req, index) {
  const referral = req.session.data.sprint7.referrals[index];

  for (const intervention of referral.interventions) {
    // Populate the intervention’s status based on which events have occurred.
    if (
      intervention.endOfServiceReport != null &&
      intervention.endOfServiceReport.terminated
    ) {
      intervention.status = "terminated";
    } else if (intervention.initialAssessment == null) {
      intervention.status = "not started";
    } else if (intervention.endOfServiceReport == null) {
      intervention.status = "in progress";
    } else {
      intervention.status = "completed";
    }

    // Populate initial assessment status based on which events have occurred.
    if (intervention.initialAssessment == null) {
      intervention.initialAssessmentStatus = "not scheduled";
    } else if (intervention.initialAssessment.delivered) {
      intervention.initialAssessmentStatus = "delivered";
    } else {
      intervention.initialAssessmentStatus = "scheduled";
    }

    // Populate action plan status based on what’s happened to the plan.
    if (!intervention.actionPlanSubmitted) {
      intervention.actionPlanStatus = "not submitted";
    } else if (!intervention.actionPlanApproved) {
      intervention.actionPlanStatus = "pending approval";
    } else {
      intervention.actionPlanStatus = "approved";
    }

    // Populate each session’s status based on which events have occurred.
    if (intervention.actionPlanApproved) {
      var awaitingFeedback = true;
      for (const session of intervention.sessions) {
        if (session.assessment != null) {
          if (session.assessment.attended === "no") {
            session.status = "no show";
          } else {
            session.status = "completed";
          }
        } else if (awaitingFeedback) {
          session.status = "awaiting feedback";
          awaitingFeedback = false;
        } else {
          session.status = "not started";
        }
      }
    }

    // Populate overall intervention sessions status.
    if (
      intervention.sessions.some(
        (session) => session.status === "awaiting feedback"
      )
    ) {
      intervention.sessionsStatus = "awaiting feedback";
    } else {
      intervention.sessionsStatus = "completed";
    }

    // Populate end of service report status.
    if (intervention.endOfServiceReport == null) {
      intervention.endOfServiceReportStatus = "not started";
    } else if (intervention.endOfServiceReport.terminated) {
      intervention.endOfServiceReportStatus = "terminated";
    } else {
      intervention.endOfServiceReportStatus = "completed";
    }

    // Populate delivery progress based on which events have occurred.
    if (
      intervention.endOfServiceReport != null &&
      intervention.endOfServiceReport.terminated
    ) {
      intervention.deliveryProgress = "terminated";
    } else if (
      intervention.sessions.some((session) => session.assessment != null)
    ) {
      if (
        intervention.sessions.every((session) => session.assessment != null) &&
        intervention.endOfServiceReport != null
      ) {
        intervention.deliveryProgress = "completed";
      } else {
        intervention.deliveryProgress = "in progress";
      }
    } else {
      intervention.deliveryProgress = "not started";
    }
  }

  return referral;
}

function findIntervention(req) {
  const referral = findReferral(req);
  return referral.interventions[req.params.interventionIndex];
}

function cssClassForInitialAssessmentStatus(initialAssessmentStatus) {
  switch (initialAssessmentStatus) {
    case "scheduled":
    case "delivered":
      return "govuk-tag";
    case "not scheduled":
      return "govuk-tag govuk-tag--grey";
    default:
      return "";
  }
}

function cssClassForActionPlanStatus(actionPlanStatus) {
  switch (actionPlanStatus) {
    case "pending approval":
      return "govuk-tag govuk-tag--red";
    case "not submitted":
      return "govuk-tag govuk-tag--grey";
    case "approved":
      return "govuk-tag";
    default:
      return "";
  }
}

function cssClassForSessionStatus(sessionStatus) {
  switch (sessionStatus) {
    case "completed":
      return "govuk-tag";
    case "no show":
      return "govuk-tag govuk-tag--red";
    default:
      return "govuk-tag govuk-tag--grey";
  }
}

function cssClassForInterventionSessionsStatus(sessionsStatus) {
  switch (sessionsStatus) {
    case "completed":
      return "govuk-tag";
    default:
      return "govuk-tag govuk-tag--grey";
  }
}

function cssClassForEndOfServiceReportStatus(endOfServiceReportStatus) {
  switch (endOfServiceReportStatus) {
    case "completed":
      return "govuk-tag";
    case "terminated":
      return "govuk-tag govuk-tag--red";
    default:
      return "govuk-tag govuk-tag--grey";
  }
}

// stolen from https://blog.abelotech.com/posts/generate-random-values-nodejs-javascript/#generate-random-values-using-nodejs-crypto-module
function randomValueHex(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, len); // return required number of characters
}

router.get("/referrals", (req, res) => {
  const referrals = allReferrals(req);
  res.render(
    "sprint-7/book-and-manage/manage-a-referral/caseworker/referrals",
    { referrals }
  );
});

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex",
  (req, res) => {
    const referral = findReferral(req);
    const intervention = findIntervention(req);

    const allSessionsAssessed = intervention.sessions.every(
      (session) => session.assessment != null
    );
    const canChangeActionPlan = intervention.endOfServiceReport == null;
    const initialAssessmentScheduled = intervention.initialAssessment != null;

    const viewModel = {};

    if (req.session.data.accordionSessionId == null) {
      req.session.data.accordionSessionId = randomValueHex(5);
    }

    viewModel.tasksToCompleteSections = [];
    viewModel.completedTasksSections = [];

    // TODO the isTaskCompleted should be DRY-ed up with the blue tag logic
    // from the cssClassFor… functions
    //
    // (the only discrepancy is initial assessment, which uses blue tag for
    // "scheduled" status, which is still considered a to-do task)

    const showInitialAssessment = true;
    viewModel.populateInitialAssessmentContent = true;
    if (showInitialAssessment) {
      const section = {
        id: "initialAssessment",
        populateContent: viewModel.populateInitialAssessmentContent,
      };

      const isTaskCompleted =
        intervention.initialAssessmentStatus === "delivered";
      if (isTaskCompleted) {
        viewModel.completedTasksSections.push(section);
      } else {
        viewModel.tasksToCompleteSections.push(section);
      }
    }

    const showActionPlan = viewModel.populateInitialAssessmentContent;
    viewModel.populateActionPlanContent =
      intervention.initialAssessmentStatus === "delivered";
    if (showActionPlan) {
      const section = {
        id: "actionPlan",
        populateContent: viewModel.populateActionPlanContent,
      };

      const isTaskCompleted =
        viewModel.populateActionPlanContent &&
        intervention.actionPlanStatus === "approved";
      if (isTaskCompleted) {
        viewModel.completedTasksSections.push(section);
      } else {
        viewModel.tasksToCompleteSections.push(section);
      }
    }

    const showInterventionSessions = viewModel.populateActionPlanContent;
    viewModel.populateInterventionSessionsContent =
      intervention.actionPlanStatus === "approved";
    if (showInterventionSessions) {
      const section = {
        id: "interventionSessions",
        populateContent: viewModel.populateInterventionSessionsContent,
      };

      const isTaskCompleted =
        viewModel.populateInterventionSessionsContent &&
        intervention.sessionsStatus === "completed";
      if (isTaskCompleted) {
        viewModel.completedTasksSections.push(section);
      } else {
        viewModel.tasksToCompleteSections.push(section);
      }
    }

    const showEndOfServiceReport = true;
    viewModel.populateEndOfServiceReportContent = true;
    if (showEndOfServiceReport) {
      const section = {
        id: "endOfServiceReport",
        populateContent: viewModel.populateEndOfServiceReportContent,
      };

      const isTaskCompleted = ["completed", "terminated"].includes(
        intervention.endOfServiceReportStatus
      );
      if (isTaskCompleted) {
        viewModel.completedTasksSections.push(section);
      } else {
        viewModel.tasksToCompleteSections.push(section);
      }
    }

    viewModel.noShowSessionIndex = intervention.sessions.findIndex(
      (session) =>
        session.assessment != null &&
        session.assessment.attended === "no" &&
        session.absenceJudgement == null
    );

    res.render(
      "sprint-7/book-and-manage/manage-a-referral/caseworker/intervention",
      {
        referral,
        intervention,
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        allSessionsAssessed,
        canChangeActionPlan,
        cssClassForInitialAssessmentStatus,
        cssClassForSessionStatus,
        cssClassForInterventionSessionsStatus,
        cssClassForActionPlanStatus,
        cssClassForEndOfServiceReportStatus,
        initialAssessmentScheduled,
        viewModel,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/action-plan",
  (req, res) => {
    const referral = findReferral(req);
    const intervention = findIntervention(req);

    const canChangeActionPlan = intervention.endOfServiceReport == null;

    res.render(
      "sprint-7/book-and-manage/manage-a-referral/caseworker/action-plan",
      {
        referral,
        intervention,
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        canChangeActionPlan,
        cssClassForSessionStatus,
      }
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/desired-outcomes/:desiredOutcomeIndex/activities",
  (req, res) => {
    const intervention = findIntervention(req);

    const desiredOutcome = intervention.desiredOutcomes[req.params.desiredOutcomeIndex];

    const activity = { text: req.body.text };
    desiredOutcome.activities.push(activity);

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan#activities-${req.params.desiredOutcomeIndex}`
    );
  }
);

function addSessionToIntervention(intervention) {
  // We don’t yet have a proper “add session” page, so start tomorrow and
  // increment by a week each time
  var date;
  if (intervention.sessions.length > 0) {
    date = moment(intervention.sessions[intervention.sessions.length - 1].date)
      .add(1, "week")
      .toDate();
  } else {
    date = moment(new Date()).add(4, "day").toDate();
  }

  const session = {
    title: `Session ${intervention.sessions.length + 1}`,
    date: date,
    startTime: "17:00",
    endTime: "18:00",
  };
  intervention.sessions.push(session);
}

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/sessions",
  (req, res) => {
    const intervention = findIntervention(req);

    addSessionToIntervention(intervention);

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan#sessions`
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/action-plan-submission",
  (req, res) => {
    const intervention = findIntervention(req);
    intervention.actionPlanSubmitted = true;

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan-confirmation`
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/action-plan-confirmation",
  (req, res) => {
    const intervention = findIntervention(req);
    const referral = findReferral(req);

    res.render(
      "sprint-7/book-and-manage/manage-a-referral/caseworker/action-plan-confirmation",
      {
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        intervention,
        referral,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/fast-forward/action-plan-approved",
  (req, res) => {
    const intervention = findIntervention(req);

    intervention.actionPlanApproved = true;
    intervention.actionPlanApprovedAt = new Date();

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment",
  (req, res) => {
    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/sessions/${req.params.sessionIndex}/assessment/attended`
    );
  }
);

function updateWipAssessmentFromRequest(req) {
  const intervention = findIntervention(req);
  const sessionIndex = parseInt(req.params.sessionIndex);
  const session = intervention.sessions[sessionIndex];

  if (session.wipAssessment === undefined) {
    session.wipAssessment = {};
  }
  Object.assign(session.wipAssessment, req.body);
}

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment/attended",
  (req, res) => {
    updateWipAssessmentFromRequest(req);

    const intervention = findIntervention(req);
    const sessionIndex = parseInt(req.params.sessionIndex);
    const session = intervention.sessions[sessionIndex];
    const attended = session.wipAssessment.attended !== "no";

    const page = attended ? "safeguarding" : "details";

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/sessions/${req.params.sessionIndex}/assessment/${page}`
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment/details",
  (req, res) => {
    updateWipAssessmentFromRequest(req);

    // Commit the WIP assessment
    const intervention = findIntervention(req);
    const sessionIndex = parseInt(req.params.sessionIndex);
    const session = intervention.sessions[sessionIndex];
    session.assessment = session.wipAssessment;
    delete session.wipAssessment;

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`
    );
  }
);

const assessmentJourney = ["attended", "safeguarding", "needs", "circumstances", "outcomes", "metrics", "details"];

for (let i = 0; i < assessmentJourney.length; i++) {
  const page = assessmentJourney[i];

  router.get(
    `/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment/${page}`,
    (req, res) => {
      const intervention = findIntervention(req);
      const referral = findReferral(req);

      const sessionIndex = parseInt(req.params.sessionIndex);

      res.render(
        `sprint-7/book-and-manage/manage-a-referral/caseworker/assessment/${page}`,
        {
          referralIndex: req.params.referralIndex,
          interventionIndex: req.params.interventionIndex,
          intervention,
          sessionIndex,
          referral,
        }
      );
    }
  );
}

for (let i = 0; i < assessmentJourney.length - 1; i++) {
  const page = assessmentJourney[i];
  const nextPage = assessmentJourney[i + 1];

  router.post(
    `/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment/${page}`,
    (req, res) => {
      updateWipAssessmentFromRequest(req);

      res.redirect(
        `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/sessions/${req.params.sessionIndex}/assessment/${nextPage}`
      );
    }
  );
}

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/fast-forward/probation-practitioner-judgement",
  (req, res) => {
    const intervention = findIntervention(req);
    const sessionIndex = parseInt(req.params.sessionIndex);
    const session = intervention.sessions[sessionIndex];

    // We want to demonstrate what an acceptable and an unacceptable absence
    // look like.

    // Fake a judgement as an acceptable absence.
    session.absenceJudgement = "acceptable";

    // If there are no more sessions after this one, then add another one.
    if (sessionIndex == intervention.sessions.length - 1) {
      addSessionToIntervention(intervention);
    }

    const nextSession = intervention.sessions[sessionIndex + 1];
    // Fake an assessment and a judgement as an unacceptable absence.
    nextSession.assessment = { attended: "no" };
    nextSession.absenceJudgement = "unacceptable";

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/fast-forward/sessions-completed",
  (req, res) => {
    const intervention = findIntervention(req);

    for (session of intervention.sessions) {
      if (session.assessment == null) {
        session.assessment = { attended: "yes" };
      }
    }

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`
    );
  }
);

router.get(
  `/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report`,
  (req, res) => {
    const intervention = findIntervention(req);
    const referral = findReferral(req);

    const isTermination = req.query.termination === "true";

    res.render(
      `sprint-7/book-and-manage/manage-a-referral/caseworker/end-of-service-report`,
      {
        intervention,
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        referral,
        isTermination,
      }
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report-check-answers",
  (req, res) => {
    const intervention = findIntervention(req);
    const referral = findReferral(req);

    const isTermination = req.body.terminated === "true";

    endOfServiceReport = req.body;

    res.render(
      "sprint-7/book-and-manage/manage-a-referral/caseworker/end-of-service-report-check-answers",
      {
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        intervention,
        referral,
        endOfServiceReport,
        isTermination,
      }
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report-reason",
  (req, res) => {
    switch (req.body.reason) {
      case "delivered-successfully":
        res.redirect(
          `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report`
        );
        break;
      case "termination":
        res.redirect(
          `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-contacted-probation-practitioner`
        );
        break;
      default:
        // Not building validation into the prototype, so just ask the
        // question again.
        res.redirect(
          `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-reason`
        );
        break;
    }
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report-contacted-probation-practitioner",
  (req, res) => {
    switch (req.body["contacted-probation-practitioner"]) {
      case "yes":
        res.redirect(
          `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report?termination=true`
        );
        break;
      case "no":
        res.redirect(
          `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-contact-probation-practitioner`
        );
        break;
      default:
        // Not building validation into the prototype, so just ask the
        // question again.
        res.redirect(
          `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-contacted-probation-practitioner`
        );
        break;
    }
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report",
  (req, res) => {
    const intervention = findIntervention(req);

    const endOfServiceReport = req.body;
    endOfServiceReport.terminated = endOfServiceReport.terminated === "true";

    intervention.endOfServiceReport = endOfServiceReport;
    intervention.endOfServiceReportSubmittedAt = new Date();

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-confirmation`
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report-confirmation",
  (req, res) => {
    const intervention = findIntervention(req);
    const referral = findReferral(req);

    res.render(
      "sprint-7/book-and-manage/manage-a-referral/caseworker/end-of-service-report-confirmation",
      {
        intervention,
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        referral,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment",
  (req, res) => {
    const intervention = findIntervention(req);
    const referral = findReferral(req);

    res.render(
      "sprint-7/book-and-manage/manage-a-referral/caseworker/initial-assessment",
      {
        intervention,
        referralIndex: req.params.referralIndex,
        interventionIndex: req.params.interventionIndex,
        referral,
      }
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment",
  (req, res) => {
    const intervention = findIntervention(req);

    intervention.initialAssessment = req.body;

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`
    );
  }
);

router.post(
  "/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment-delivered",
  (req, res) => {
    const intervention = findIntervention(req);

    // Because of whatever magic auto-store-data.js is doing, we get "yes" if
    // JS disabled, and ["yes"] if JS enabled 🤷
    //
    // Aaand, asking the Internet ”JavaScript array equality”, it seems like
    // there isn’t a built-in thing 🤷🤷
    //
    // Looks like utils.js#addCheckedFunction has to handle the same bumps
    if (
      req.body.delivered === "yes" ||
      (req.body.delivered.length === 1 && req.body.delivered[0] === "yes")
    ) {
      intervention.initialAssessment.delivered = true;
    }

    res.redirect(
      `/sprint-7/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`
    );
  }
);

for (const page of [
  "probation-practitioner-email-confirmation",
  "send-email",
  "upload-case-notes",
  "communication-archive",
  "casenotes-upload-confirmation",
  "end-of-service-report",
  "end-of-service-report-check-your-answers",
  "end-of-service-report-reason",
  "end-of-service-report-contacted-probation-practitioner",
  "end-of-service-report-contact-probation-practitioner",
]) {
  router.get(
    `/referrals/:referralIndex/interventions/:interventionIndex/${page}`,
    (req, res) => {
      const intervention = findIntervention(req);
      const referral = findReferral(req);

      res.render(
        `sprint-7/book-and-manage/manage-a-referral/caseworker/${page}`,
        {
          intervention,
          referralIndex: req.params.referralIndex,
          interventionIndex: req.params.interventionIndex,
          referral,
        }
      );
    }
  );
}

module.exports = router;
