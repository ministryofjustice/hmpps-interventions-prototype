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
    "/sprint-4/book-and-manage/manage-a-referral/manager/dashboard";
  next();
});

router.get("/dashboard", (req, res) => {
  res.locals.serviceName = "Access interventions and services";
  res.render("sprint-4/book-and-manage/manage-a-referral/manager/dashboard");
});

router.get("/referrals", (req, res) => {
  const referralsWithUnassignedInterventions = req.session.data.sprint4.referrals
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
  const referralsWithAssignedInterventions = req.session.data.sprint4.referrals
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

  res.render("sprint-4/book-and-manage/manage-a-referral/manager/referrals", {
    referralsWithUnassignedInterventions: referralsWithUnassignedInterventions,
    referralsWithAssignedInterventions: referralsWithAssignedInterventions,
  });
});

router.get(
  "/referrals/:referralIndex/interventions/:interventionId",
  (req, res) => {
    const referralIndex = req.params.referralIndex;
    const interventionId = req.params.interventionId;

    const referral = req.session.data.sprint4.referrals[referralIndex];
    const serviceUser = referral.serviceUser;
    const intervention = findIntervention(referral, interventionId);
    const caseworkers = req.session.data.sprint4.caseworkers;
    const reassign = req.query.reassign;
    const currentCaseworker = { name: req.session.data["assigned-caseworker"] };
    const probationOfficer = referral.probationPractitioner;

    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/intervention",
      {
        referralIndex,
        interventionId,
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
  "/referrals/:referralIndex/interventions/:interventionId/confirm-details",
  (req, res) => {
    const referralIndex = req.params.referralIndex;
    const interventionId = req.params.interventionId;
    const referral = req.session.data.sprint4.referrals[referralIndex];
    const serviceUser = referral.serviceUser;
    const intervention = findIntervention(referral, interventionId);
    const probationOfficer = referral.probationPractitioner;

    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/confirm-details",
      {
        referralIndex,
        interventionId,
        serviceUser,
        intervention,
        probationOfficer,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionId/caseworker-confirmation",
  (req, res) => {
    const referral =
      req.session.data.sprint4.referrals[req.params.referralIndex];

    const intervention = referral.interventions[req.params.interventionId];
    intervention.assigned = true;
    intervention.assignedCaseworker = req.session.data["assigned-caseworker"];

    const referralNumber = referral.reference;

    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/caseworker-email-confirmation",
      {
        referralNumber,
      }
    );
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionId/send-email",
  (req, res) => {
    res.render("sprint-4/book-and-manage/manage-a-referral/manager/send-email");
  }
);

router.get(
  "/referrals/:referralIndex/interventions/:interventionId/probation-practitioner-email-confirmation",
  (req, res) => {
    res.render(
      "sprint-4/book-and-manage/manage-a-referral/manager/probation-practitioner-email-confirmation"
    );
  }
);

module.exports = router;
