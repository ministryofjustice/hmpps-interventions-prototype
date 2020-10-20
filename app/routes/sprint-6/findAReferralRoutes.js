const express = require("express");
const router = express.Router();

router.get("/results", function (req, res) {
  const interventions = req.session.data.sprint6.findAnIntervention;
  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  console.log(selectedInterventions);

  res.render(
    "sprint-6/book-and-manage/make-a-referral/find-an-intervention/results",
    {
      selectedInterventions: selectedInterventions,
    }
  );
});

router.get("/:interventionId/details", function (req, res) {
  const interventionId = req.params.interventionId;
  const interventions = req.session.data.sprint6.findAnIntervention;

  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  const intervention = interventions.find(
    (intervention) => interventionId === intervention.id
  );

  res.render(
    "sprint-6/book-and-manage/make-a-referral/find-an-intervention/details",
    {
      intervention: intervention,
      selectedInterventions: selectedInterventions,
    }
  );
});

router.post("/:interventionId/details", function (req, res) {
  const interventionId = req.params.interventionId;
  const interventions = req.session.data.sprint6.findAnIntervention;

  const intervention = interventions.find(
    (intervention) => interventionId === intervention.id
  );

  intervention.selected = true;

  const selectedInterventions = interventions.filter(
    (intervention) => intervention.selected
  );

  res.render(
    "sprint-6/book-and-manage/make-a-referral/find-an-intervention/details",
    {
      intervention: intervention,
      selectedInterventions: selectedInterventions,
    }
  );
});

module.exports = router;
