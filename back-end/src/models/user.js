const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
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
    unique: true,
  },
  breifProfile: {
    type: String,
    min: 6,
  },
  hash_password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: [true, "role is required"],
  },
});

userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);
