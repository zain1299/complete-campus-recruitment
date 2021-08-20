const express = require("express");
const {
  signup,
  signin,
  signout,
  updateUser,
  allAdmins,
} = require("../controller/auth");
const { requireSignin } = require("../common-middleware/index");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");

const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.put("/update-user", updateUser);
router.post("/signout", signout);
router.get("/all-admins", allAdmins);

module.exports = router;
