const express = require("express");
const router = express.Router();

router.get("/cases", (req, res) => {
  res.render("sprint-5/monitor/cases", {
    referrals: req.session.data.sprint5.referrals,
    groupBy: req.query.group_by,
  });
});

module.exports = router;
