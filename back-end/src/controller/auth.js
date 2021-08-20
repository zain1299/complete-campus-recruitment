const User = require("../models/user");
var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered",
      });

    const { firstName, lastName, email, breifProfile, password, role } =
      req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      breifProfile,
      password,
      role,
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (data) {
        if (role === "company") {
          return res.status(201).json({
            message: "Admin created Successfully",
          });
        } else {
          if (role === "student") {
            return res.status(201).json({
              message: "Student created Successfully",
            });
          }
        }
      }
    });
  });
};

exports.updateUser = (req, res) => {
  const body = req.body;
  const { breifProfile, user_id } = body;

  User.findByIdAndUpdate(
    user_id,
    { breifProfile: breifProfile },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.json({ success: true });
        console.log("Updated User : ", docs);
      }
    }
  );
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id, role: user.role }, "secret");
        const { _id, firstName, lastName, email, breifProfile, role } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, breifProfile, role },
        });
      } else {
        return res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout Successfully...!",
  });
};

exports.allAdmins = (req, res) => {
  User.find({}).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const users = user.filter((filtered) => filtered.role === "company");
      res.send(users);
    }
  });
};
