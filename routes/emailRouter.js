//Imports
const express = require("express");
const Mailer = require("../handlers/mailer");

//Code
const router = express.Router();
router.post("/", async (req, res) => {
  console.log('hi from email router !');
  const { toEmailAddress, htmlContent } = req.body.data;
  try {
    await new Mailer(toEmailAddress, htmlContent).sendTestMessage(res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
