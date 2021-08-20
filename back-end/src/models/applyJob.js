const mongoose = require("mongoose");

const applyJobSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, "Student id  is required"],
  },
  jobId: {
    type: String,
    required: [true, "Job id  is required"],
  },
});

module.exports = mongoose.model("Apply Jobs", applyJobSchema);
