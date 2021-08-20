const express = require("express");
const { jobs, allJobs, deleteJob, jobsAdmin } = require("../controller/jobs");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");

const router = express.Router();

router.post("/jobs", requireSignin, adminMiddleware, jobs);
router.get("/all-jobs", allJobs);
router.get("/posted-jobs-admin", jobsAdmin);
router.delete("/delete-job", deleteJob);

module.exports = router;
