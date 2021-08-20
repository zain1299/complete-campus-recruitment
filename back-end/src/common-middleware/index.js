const jwt = require("jsonwebtoken");

const secret_key = "secret";

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, secret_key);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorization Required!" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "company") {
    return res.status(400).json({ message: "Admin Acces Denied" });
  }
  next();
};

exports.studentMiddleware = (req, res, next) => {
  if (req.user.role !== "student") {
    return res.status(400).json({ message: "student Acces Denied" });
  }
  next();
};
