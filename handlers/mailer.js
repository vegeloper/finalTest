//Libraries
const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const mailgunHandler = require("nodemailer-mailgun-transport");
var ent = require("ent");
//Templates
const { AMPTemplate } = require("../templates/email-templates/ampTemplate");


const mailgunAuth = {
  auth: {
    api_key: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};


module.exports = class Email {
  constructor(emailAddress, richHTML) {
    this.to = emailAddress;
    this.emailHTML = richHTML;
    this.from = `testAccount <${process.env.EMAIL_FROM}>`;
  }

  _transportSMPT() {
    return nodemailer.createTransport(mailgunHandler(mailgunAuth));
    
  }

  // Send method
  async _send(subject, cb) {
    const decodedHTML = ent.decode(this.emailHTML);
    const ampTemplateHTML = AMPTemplate(decodedHTML);
    console.log('decoded HTML is:', decodedHTML);
    //Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: ampTemplateHTML,
      text: htmlToText.fromString(ampTemplateHTML),
    };

    //SEND MAIL HERE!
    await this._transportSMPT().sendMail(mailOptions, function (err, response) {
      if (err) {
        cb.status(400);
        console.log("email failed!");
        console.log("error is:", err);
      } else {
        cb.status(200);
        console.log('email success!');
        console.log('response is:', response);
      }
    });
  }

  async sendTestMessage(cb) {
    const mySubject = "This is a test subject";
    await this._send(mySubject, cb);
  }
};
