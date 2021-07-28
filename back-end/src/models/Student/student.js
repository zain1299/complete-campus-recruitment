const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firtstName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowecase: true,
  },
  role: {
    type: String,
    enum: ["student", "company"],
  },
  hash_password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
