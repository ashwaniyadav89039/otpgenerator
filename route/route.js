const express = require("express");
const router = express.Router();
const {
  getMobileNumber,
  sendOTP,
  verifyOTP,
  gethome,
} = require("../controller/homecontroller");

router.get("/", (req, res) => {
  getMobileNumber(req, res);
});
router.get("/home", (req, res) => {
  gethome(req, res);
});

router.post("/sendotp", (req, res) => {
  sendOTP(req, res);
});

router.post("/verifyotp", (req, res) => {
  verifyOTP(req, res);
});

module.exports = router;
