const express = require('express')
const router = express.Router()
const moment = require('moment')

router.use(function (req, res, next) {
    res.locals.serviceName = "Manage intervention referrals"
    next()
})

function findReferral(req) {
    return findReferralByIndex(req, req.params.referralIndex);
}

function allReferrals(req) {
    referrals = []
    for (i = 0; i < req.session.data.referrals.length; i++) {
	referrals.push(findReferralByIndex(req, i));
    }
    return referrals;
}

function findReferralByIndex(req, index) {
    const referral = req.session.data.referrals[index];

    for (const intervention of referral.interventions) {
	// Populate the intervention’s status based on which events have occurred.
	if (intervention.initialAssessment == null) {
	    intervention.status = "not started";
	} else if (intervention.endOfServiceReport == null) {
	    intervention.status = "in progress";
	} else {
	    intervention.status = "completed";
	}

	// Populate initial assessment status based on which events have occurred.
	if (intervention.initialAssessment == null) {
	    intervention.initialAssessmentStatus = "not scheduled";
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
	    var awaitingAssessment = true;
	    for (const session of intervention.sessions) {
		if (session.assessment != null) {
		    if (session.assessment.attended === "no") {
			session.status = "no show";
		    } else {
			session.status = "completed";
		    }
		} else if (awaitingAssessment) {
		    session.status = "awaiting assessment";
		    awaitingAssessment = false;
		} else {
		    session.status = "not started";
		}
	    }
	}

	// Populate end of service report status.
	if (intervention.endOfServiceReport == null) {
	    intervention.endOfServiceReportStatus = "not started";
	} else {
	    intervention.endOfServiceReportStatus = "completed";
	}

	// Populate delivery progress based on which events have occurred.
	if (intervention.sessions.some(session => session.assessment != null)) {
	    if (intervention.sessions.every(session => session.assessment != null) && intervention.endOfServiceReport != null) {
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
	default: return "";
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

function cssClassForEndOfServiceReportStatus(endOfServiceReportStatus) {
    switch (endOfServiceReportStatus) {
	case "completed":
	    return "govuk-tag";
	default:
	    return "govuk-tag govuk-tag--grey";
    }
}

router.get("/referrals", (req, res) => {
    const referrals = allReferrals(req);
    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/referrals", { referrals, moment });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex", (req, res) => {
    const referral = findReferral(req);
    const intervention = findIntervention(req);

    const allSessionsAssessed = intervention.sessions.every(session => session.assessment != null);
    const canChangeActionPlan = intervention.endOfServiceReport == null;
    const initialAssessmentScheduled = intervention.initialAssessment != null;

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/intervention", { referral, intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, allSessionsAssessed, canChangeActionPlan, moment, cssClassForInitialAssessmentStatus, cssClassForSessionStatus, cssClassForActionPlanStatus, cssClassForEndOfServiceReportStatus, initialAssessmentScheduled });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/action-plan", (req, res) => {
    const referral = findReferral(req);
    const intervention = findIntervention(req);

    const canChangeActionPlan = intervention.endOfServiceReport == null;

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/action-plan", { referral, intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, canChangeActionPlan, moment, cssClassForSessionStatus });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/goals", (req, res) => {
    const intervention = findIntervention(req);

    const goal = { text: req.body.text };
    intervention.goals.push(goal);

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan#goals`);
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

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan#sessions`);
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/action-plan-submission", (req, res) => {
    const intervention = findIntervention(req);
    intervention.actionPlanSubmitted = true;

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/action-plan-confirmation`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/action-plan-confirmation", (req, res) => {
    const intervention = findIntervention(req);

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/action-plan-confirmation", { referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, intervention });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/fast-forward/action-plan-approved", (req, res) => {
    const intervention = findIntervention(req);

    intervention.actionPlanApproved = true;
    intervention.actionPlanApprovedAt = new Date();

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment", (req, res) => {
    const intervention = findIntervention(req);

    const sessionIndex = parseInt(req.params.sessionIndex);

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/assessment", { referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, intervention, sessionIndex });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/sessions/:sessionIndex/assessment", (req, res) => {
    const intervention = findIntervention(req);

    const sessionIndex = parseInt(req.params.sessionIndex);

    intervention.sessions[sessionIndex].assessment = req.body;

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/fast-forward/sessions-completed", (req, res) => {
    const intervention = findIntervention(req);

    for (session of intervention.sessions) {
	if (session.assessment == null) {
	    session.assessment = {};
	}
    }

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report", (req, res) => {
    const intervention = findIntervention(req);

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/end-of-service-report", { referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex, intervention });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report", (req, res) => {
    const intervention = findIntervention(req);

    intervention.endOfServiceReport = req.body;
    intervention.endOfServiceReportSubmittedAt = new Date();

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}/end-of-service-report-confirmation`);
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/end-of-service-report-confirmation", (req, res) => {
    const intervention = findIntervention(req);

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/end-of-service-report-confirmation", { intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex });
});

router.get("/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment", (req, res) => {
    const intervention = findIntervention(req);

    res.render("sprint-4/book-and-manage/manage-a-referral/caseworker/initial-assessment", { intervention, referralIndex: req.params.referralIndex, interventionIndex: req.params.interventionIndex });
});

router.post("/referrals/:referralIndex/interventions/:interventionIndex/initial-assessment", (req, res) => {
    const intervention = findIntervention(req);

    if (req.body.scheduled === "yes") {
	intervention.initialAssessment = req.body;
    }

    res.redirect(`/sprint-4/book-and-manage/manage-a-referral/caseworker/referrals/${req.params.referralIndex}/interventions/${req.params.interventionIndex}`);
});

module.exports = router
