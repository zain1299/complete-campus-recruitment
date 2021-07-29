const express = require("express");
const { signup, signin } = require("../../controller/company/auth");

const router = express.Router();

router.post("/company/signup", signup);
router.post("/company/signin", signin);

module.exports = router;
