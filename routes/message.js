const express = require("express");
const { sendWeeklyReports } = require("../controllers/message");
const router = express.Router();

router.route("/").post(sendWeeklyReports);

module.exports = router;
