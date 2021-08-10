const express = require("express");
const { signup, signin, signout, updateUser } = require("../controller/auth");
const { requireSignin } = require("../common-middleware/index");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");

const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/update-user", requireSignin, updateUser);
router.post("/signout", signout);

module.exports = router;
