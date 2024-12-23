const express = require("express");
const { getReports, getReport } = require("../controllers/report");
const router = express.Router();

router.route("/").get(getReports);
router.route("/:id").get(getReport);

module.exports = router;
