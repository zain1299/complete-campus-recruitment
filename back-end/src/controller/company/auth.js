const User = require("../../models/user");
var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((user) => {
    if (user)
      return res.status(400).json({
        message: "Admin already registered",
      });

    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      role: "company",
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (data) {
        return res.status(201).json({
          message: "admin created Successfully",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id, role: user.role }, "secret");
        const { _id, firstName, lastName, email, role } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role },
        });
      } else {
        return res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};
