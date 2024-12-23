const express = require("express");
const router = express.Router();
const reportRouter = require("./report");
const messageRouter = require("./message");

router.use("/report", reportRouter);
router.use("/message", messageRouter);

/* GET home page. */
router.get("/", (req, res) => {
  res.send(JSON.stringify);
});

module.exports = router;
