const express = require("express");
const { jobs } = require("../controller/jobs");

const router = express.Router();

router.get("/jobs", jobs);

module.exports = router;
