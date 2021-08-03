const Job = require("../models/jobs");

exports.jobs = (req, res, next) => {
  Job.create(req.body)
    .then((job) => {
      res.send(job);
    })
    .catch(next);
};
