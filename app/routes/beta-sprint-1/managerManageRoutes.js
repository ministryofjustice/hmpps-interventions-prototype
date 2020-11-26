const express = require("express");
const router = express.Router();
const moment = require("moment");

const findIntervention = (referral, interventionId) => {
  return referral.interventions.find(
    (intervention) => interventionId === intervention.id
  );
};

router.use(function (req, res, next) {
  res.locals.serviceName = "Receive intervention referrals";
  res.locals.serviceHref =
    "/beta-sprint-1/book-and-manage/manage-a-referral/manager/dashboard";
  res.locals.loggedInUserName =
    req.session.data.betaSprint1.caseworkers[3].firstName;
  next();
});

router.get("/dashboard", (req, res) => {
  res.locals.serviceName = "Access interventions and services";
  res.render("beta-sprint-1/book-and-manage/manage-a-referral/manager/dashboard");
});

router.get("/referrals", (req, res) => {
  const referralsWithUnassignedInterventions = req.session.data.betaSprint1.referrals
    .filter((referral) =>
      referral.interventions.some((intervention) => !intervention.assigned)
    )
    .map((referral) => {
      return {
        reference: referral.reference,
        serviceUser: referral.serviceUser,
        probationPractitioner: referral.probationPractitioner,
        interventions: referral.interventions.filter(
          (intervention) => !intervention.assigned
        ),
      };
    });
  const referralsWithAssignedInterventions = req.session.data.betaSprint1.referrals
    .filter((referral) =>
      referral.interventions.some((intervention) => intervention.assigned)
    )
    .map((referral) => {
      return {
        reference: referral.reference,
        serviceUser: referral.serviceUser,
        probationPractitioner: referral.probationPractitioner,
        interventions: referral.interventions.filter(
          (intervention) => intervention.assigned
        ),
      };
    });

  res.render("beta-sprint-1/book-and-manage/manage-a-referral/manager/referrals", {
    referralsWithUnassignedInterventions: referralsWithUnassignedInterventions,
    referralsWithAssignedInterventions: referralsWithAssignedInterventions,
  });
});

router.get(
  "/referrals/:referralIndex/interventions/:interventionId",
  (req, res) => {
    const referralIndex = req.params.referralIndex;
    const interventionId = req.params.interventionId;

    const referral = req.session.data.betaSprint1.referrals[referralIndex];
    const serviceUser = referral.serviceUser;
    const intervention = findIntervention(referral, interventionId);
    const caseworkers = req.session.data.betaSprint1.caseworkers;
    const reassign = req.query.reassign;
    const currentCaseworker = { name: req.session.data["assigned-caseworker"] };
    const probationOfficer = referral.probationPractitioner;

    res.render(
      "beta-sprint-1/book-and-manage/manage-a-referral/manager/intervention",
      {
        referralIndex,
        interventionId,
        serviceUser,
        intervention,
        referral,
        caseworkers,
        reassign,
        currentCaseworker,
        probationOfficer,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionId/confirm-details",
  (req, res) => {
    const referralIndex = req.params.referralIndex;
    const interventionId = req.params.interventionId;
    const referral = req.session.data.betaSprint1.referrals[referralIndex];
    const serviceUser = referral.serviceUser;
    const intervention = findIntervention(referral, interventionId);
    const probationOfficer = referral.probationPractitioner;

    res.render(
      "beta-sprint-1/book-and-manage/manage-a-referral/manager/confirm-details",
      {
        referralIndex,
        interventionId,
        serviceUser,
        intervention,
        referral,
        probationOfficer,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionId/caseworker-confirmation",
  (req, res) => {
    const referral =
      req.session.data.betaSprint1.referrals[req.params.referralIndex];

    const intervention = referral.interventions[req.params.interventionId];
    intervention.assigned = true;
    intervention.assignedCaseworker = req.session.data["assigned-caseworker"];

    const referralNumber = referral.reference;
    const serviceUser = referral.serviceUser;

    res.render(
      "beta-sprint-1/book-and-manage/manage-a-referral/manager/caseworker-email-confirmation",
      {
        serviceUser,
        referralNumber,
        intervention,
        referral,
      }
    );
  }
);

for (const page of [
  "send-email",
  "upload-case-notes",
  "probation-practitioner-email-confirmation",
  "casenotes-upload-confirmation",
  "communication-archive",
]) {
  router.get(
    `/referrals/:referralIndex/interventions/:interventionId/${page}`,
    (req, res) => {
      const referral =
        req.session.data.betaSprint1.referrals[req.params.referralIndex];

      res.render(`beta-sprint-1/book-and-manage/manage-a-referral/manager/${page}`, {
        referral,
        referralIndex: req.params.referralIndex,
        interventionId: req.params.interventionId,
      });
    }
  );
}

module.exports = router;
