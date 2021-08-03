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
    type: String,
    required: [true, "Last date to apply is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
});

module.exports = mongoose.model("Jobs", jobSchema);
