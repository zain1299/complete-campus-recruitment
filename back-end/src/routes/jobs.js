const express = require("express");
const { jobs } = require("../controller/jobs");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");

const router = express.Router();

router.post("/jobs", requireSignin, adminMiddleware, jobs);

module.exports = router;
