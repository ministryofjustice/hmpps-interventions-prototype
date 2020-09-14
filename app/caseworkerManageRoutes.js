const express = require('express')
const router = express.Router()
const moment = require('moment')

router.use(function (req, res, next) {
    res.locals.serviceName = "Manage intervention referrals"
    next()
})

function findReferral(req) {
    const referral = req.session.data.referrals[req.params.referralIndex];

    for (const intervention of referral.interventions) {
	// Populate each session’s status based on which events have occurred.
	if (intervention.actionPlanApproved) {
	    for (const session of intervention.sessions) {
		if (session.assessment != null) {
		    session.status = "completed";
		} else {
		    session.status = "pending";
		    break;
		}
	    }
	}

	// Populate initial assessment status based on which events have occurred.
	if (intervention.initialAssessment != null) {
	    intervention.initialAssessmentStatus = "completed";
	} else {
	    intervention.initialAssessmentStatus = "not started";
	}

	// Populate action plan status based on what’s happened to the plan.
	if (intervention.endOfServiceReport != null) {
	    intervention.actionPlanStatus = "completed";
	} else if (intervention.actionPlanApproved) {
	    intervention.actionPlanStatus = "in progress";
	} else if (intervention.actionPlanSubmitted) {
	    intervention.actionPlanStatus = "pending";
	} else {
	    intervention.actionPlanStatus = "not started";
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
	case "completed":
	    return "govuk-tag";
	case "not started":
	    return "govuk-tag govuk-tag--grey";
	default:
	    return "";
    }
}

function cssClassForActionPlanStatus(actionPlanStatus) {
    switch (actionPlanStatus) {
	case "pending":
	    return "govuk-tag govuk-tag--green";
	case "in progress":
	    return "govuk-tag govuk-tag--blue";
	case "not started":
	    return "govuk-tag govuk-tag--grey";
	case "completed":
	    return "govuk-tag";
	default: return "";
    }
}

function cssClassForSessionStatus(sessionStatus) {
    switch (sessionStatus) {
	case "completed":
	    return "govuk-tag govuk-tag--green";
	case "pending":
	    return "govuk-tag";
	default:
	    return "";
    }
}

router.get("/referrals/:referralIndex", (req, res) => {
    const referral = findReferral(req);

    const someInitialAssessmentsScheduled = referral.interventions.some(intervention => intervention.initialAssessment != null);

    res.render("book-and-manage/manage-a-referral/caseworker/referral", { referral, referralIndex: req.params.referralIndex, cssClassForInitialAssessmentStatus, cssClassForActionPlanStatus, someInitialAssessmentsScheduled });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex", (req, res) => {
    const intervention = findIntervention(req);

    const allSessionsCompleted = intervention.sessions.every(intervention => intervention.status === "completed");
    const readyForEndOfServiceReport = intervention.actionPlanApproved && allSessionsCompleted && intervention.endOfServiceReport == null;
    const canChangeActionPlan = intervention.endOfServiceReport == null;

    res.render("book-and-manage/manage-a-referral/caseworker/intervention", { intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, allSessionsCompleted, readyForEndOfServiceReport, canChangeActionPlan, moment, cssClassForSessionStatus, cssClassForActionPlanStatus });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/goals", (req, res) => {
    const intervention = findIntervention(req);

    const goal = { text: req.body.text };
    intervention.goals.push(goal);

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/sessions", (req, res) => {
    const intervention = findIntervention(req);

    // We don’t yet have a proper “add session” page, so start tomorrow and
    // increment by a week each time
    var date;
    if (intervention.sessions.length > 0) {
	date = moment(intervention.sessions[intervention.sessions.length - 1].date).add(1, 'week').toDate();
    } else {
	date = moment(new Date()).add(1, 'day').toDate();
    }

    const session = { title: `Session ${intervention.sessions.length + 1}`, date: date, startTime: "17:00", endTime: "18:00" }
    intervention.sessions.push(session);

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/action-plan-submission", (req, res) => {
    const intervention = findIntervention(req);
    intervention.actionPlanSubmitted = true;

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan-confirmation`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/action-plan-confirmation", (req, res) => {
    const intervention = findIntervention(req);

    res.render("book-and-manage/manage-a-referral/caseworker/action-plan-confirmation", { referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, intervention });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/fast-forward/action-plan-approved", (req, res) => {
    const intervention = findIntervention(req);

    intervention.actionPlanApproved = true;

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment", (req, res) => {
    const intervention = findIntervention(req);

    const sessionIndex = parseInt(req.params.sessionIndex);

    res.render("book-and-manage/manage-a-referral/caseworker/assessment", { referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, intervention, sessionIndex });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment", (req, res) => {
    const intervention = findIntervention(req);

    const sessionIndex = parseInt(req.params.sessionIndex);

    intervention.sessions[sessionIndex].assessment = req.body;

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/fast-forward/sessions-completed", (req, res) => {
    const intervention = findIntervention(req);

    for (session of intervention.sessions) {
	if (session.assessment == null) {
	    session.assessment = {};
	}
    }

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report", (req, res) => {
    const intervention = findIntervention(req);

    res.render("book-and-manage/manage-a-referral/caseworker/end-of-service-report", { referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, intervention });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report", (req, res) => {
    const intervention = findIntervention(req);

    intervention.endOfServiceReport = req.body;

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-confirmation`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report-confirmation", (req, res) => {
    const intervention = findIntervention(req);

    res.render("book-and-manage/manage-a-referral/caseworker/end-of-service-report-confirmation", { intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment", (req, res) => {
    const intervention = findIntervention(req);

    res.render("book-and-manage/manage-a-referral/caseworker/initial-assessment", { intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment", (req, res) => {
    const intervention = findIntervention(req);

    if (req.body.scheduled === "yes") {
	intervention.initialAssessment = req.body;
    }

    res.redirect(`/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}`);
});

module.exports = router
