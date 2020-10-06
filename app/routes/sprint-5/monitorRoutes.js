const express = require("express");
const router = express.Router();

router.get("/cases", (req, res) => {
  res.render("sprint-5/monitor/cases", {
    referrals: req.session.data.sprint5.referrals,
  });
});

module.exports = router;
