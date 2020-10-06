const express = require("express");
const router = express.Router();

router.get("/cases", (req, res) => {
  res.render("sprint-5/monitor/cases", {
    referrals: req.session.data.sprint5.referrals,
    groupBy: req.query.group_by,
    currentPage: "cases",
  });
});

router.get("/notifications", (req, res) => {
  res.render("sprint-5/monitor/notifications", {
    notifications: req.session.data.sprint5.notifications,
    sortBy: req.query.sort_by,
    currentPage: "notifications",
  });
});

module.exports = router;
