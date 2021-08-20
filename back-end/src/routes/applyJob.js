const express = require("express");
const { requireSignin, studentMiddleware } = require("../common-middleware");
const {
  applyJobs,
  allAppliedJobs,
  allAppliedStudents,
} = require("../controller/applyJob");

const router = express.Router();

router.post("/apply-job", requireSignin, studentMiddleware, applyJobs);
router.get("/all-applied-jobs", allAppliedJobs);
router.get("/all-applied-students", allAppliedStudents);

module.exports = router;
