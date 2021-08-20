const Job = require("../models/jobs");
const User = require("../models/user");
const applyJob = require("../models/applyJob");

exports.jobs = (req, res, next) => {
  Job.create(() => {
    const {
      title,
      description,
      experience,
      last_date,
      category,
      minimum_salary,
      company_id,
    } = req.body;

    const _jobs = new Job({
      title,
      description,
      experience,
      category,
      minimum_salary,
      last_date,
      company_id,
    });

    _jobs.save((error, data) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (data) {
        return res.status(201).json({
          message: "Job created Successfully",
        });
      }
    });
  });
};

exports.allJobs = (req, res, next) => {
  Job.find({})
    .then(async (jobs) => {
      res.send(jobs);
    })
    .catch(next);
};

exports.deleteJob = (req, res, next) => {
  Job.findByIdAndRemove({ _id: req.query.id })
    .then(() => {
      res.send("job deleted Successfull");
    })
    .catch(next);
};

// exports.deleteJob = (req, res, next) => {
//   applyJob
//     .find({ jobId: req.query.jobId })
//     .then(async (apply) => {
//       const allStudent = await Promise.all(
//         apply.map((item) => User.findById({ _id: item.studentId }))
//       );
//       allStudent
//         .deleteMany({})
//         .then(() => {
//           res.send("successfully");
//         })
//         .catch(next);
//     })
//     .catch(next);
// };

exports.jobsAdmin = (req, res, next) => {
  Job.find({ company_id: req.query.company_id })
    .then(async (apply) => {
      const allStudent = await Promise.all(
        apply.map((item) => User.findById({ _id: item.company_id }))
      );
      res.send(allStudent);
    })
    .catch(next);
};
