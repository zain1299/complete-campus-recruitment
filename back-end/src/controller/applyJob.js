const applyJob = require("../models/applyJob");
const jobs = require("../models/jobs");
const User = require("../models/user");

exports.applyJobs = (req, res, next) => {
  applyJob.create(() => {
    const { studentId, jobId } = req.body;

    const _apply = new applyJob({
      studentId,
      jobId,
    });
    _apply.save((error, data) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (data) {
        return res.status(201).json({
          message: "Job Applied Successfully",
        });
      }
    });
  });
};

exports.allAppliedJobs = (req, res, next) => {
  applyJob
    .find({ studentId: req.query.studentId })
    .then(async (apply) => {
      const alljobs = await Promise.all(
        apply.map((item) => jobs.findById({ _id: item.jobId }))
      );
      res.send(alljobs);
    })
    .catch(next);
};

exports.allAppliedStudents = (req, res, next) => {
  applyJob
    .find({ jobId: req.query.jobId })
    .then(async (apply) => {
      const allStudent = await Promise.all(
        apply.map((item) => User.findById({ _id: item.studentId }))
      );
      res.send(allStudent);
    })
    .catch(next);
};
