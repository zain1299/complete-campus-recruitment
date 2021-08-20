const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    min: 10,
  },
  experience: {
    type: String,
    required: [true, "Experience is required"],
  },
  last_date: {
    type: Date,
    required: [true, "Last date to apply is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  minimum_salary: {
    type: Number,
    required: [true, "minimum Salary is required"],
  },
  company_id: {
    type: String,
    required: [true, "Company id is required"],
  },
});

module.exports = mongoose.model("Jobs", jobSchema);
