const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: "YOUR_API_KEY",
  apiSecret: "YOUR_API_SECRET",
});
const generateRandomOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const getMobileNumber = (req, res) => {
  res.render("mobilenumber");
};

const gethome = (req, res) => {
  res.render("home");
};

const sendOTP = (req, res) => {
  const mobileNumber = req.body.mobileNumber;
  const otp = generateRandomOTP();
  const from = "YOUR_PHONE_NUMBER";
  const to = mobileNumber;
  const text = `Your OTP is: ${otp}`;
  nexmo.message.sendSms(from, to, text);
  req.flash("success", "OTP sent successfully.");
  res.render("otppage", { otp, mobileNumber });
};

const verifyOTP = (req, res) => {
  const enteredOTP = req.body.enteredOTP;
  console.log("enteredOTP", enteredOTP);
  const generatedOTP = req.body.generatedOTP;
  console.log("generatedOTP", generatedOTP);

  if (enteredOTP === generatedOTP) {
    req.flash("success", "OTP Verification Successful.");
    res.render("home");
  } else {
    req.flash("error", "OTP Verification Failed. Please try again.");
    res.redirect("/");
  }
};

module.exports = { getMobileNumber, sendOTP, verifyOTP, gethome };
