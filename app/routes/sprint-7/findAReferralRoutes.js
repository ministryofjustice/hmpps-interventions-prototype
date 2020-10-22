const express = require("express");
const router = express.Router();

router.get("/find-multi-select", function (req, res) {
  const interventions = req.session.data.sprint7.findAnIntervention;

  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  res.render(
    "sprint-7/book-and-manage/make-a-referral/find-an-intervention/find-multi-select",
    {
      selectedInterventions: selectedInterventions,
    }
  );
});

router.get("/results", function (req, res) {
  const interventions = req.session.data.sprint7.findAnIntervention;
  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  res.render(
    "sprint-7/book-and-manage/make-a-referral/find-an-intervention/results",
    {
      selectedInterventions: selectedInterventions,
    }
  );
});

router.get("/:interventionId/details", function (req, res) {
  const interventionId = req.params.interventionId;
  const interventions = req.session.data.sprint7.findAnIntervention;

  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  const intervention = interventions.find(
    (intervention) => interventionId === intervention.id
  );

  res.render(
    "sprint-7/book-and-manage/make-a-referral/find-an-intervention/details",
    {
      intervention: intervention,
      selectedInterventions: selectedInterventions,
    }
  );
});

router.post("/:interventionId/details", function (req, res) {
  const interventionId = req.params.interventionId;
  const interventions = req.session.data.sprint7.findAnIntervention;

  const intervention = interventions.find(
    (intervention) => interventionId === intervention.id
  );

  intervention.selected = true;

  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  res.render(
    "sprint-7/book-and-manage/make-a-referral/find-an-intervention/details",
    {
      intervention: intervention,
      selectedInterventions: selectedInterventions,
      interventionAdded: true,
    }
  );
});

router.get("/confirm-selected-interventions", function (req, res) {
  const interventions = req.session.data.sprint7.findAnIntervention;

  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  res.render(
    "sprint-7/book-and-manage/make-a-referral/find-an-intervention/confirm-selected-interventions",
    {
      selectedInterventions: selectedInterventions,
    }
  );
});

module.exports = router;
