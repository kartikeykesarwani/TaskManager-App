const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "kartikey0099.cse19@chitkara.edu.in",
  from: "kartikeykesarwani.2@gmail.com",
  subject: "This is my first creation",
  text: "I hope this one actually gets to you",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
});
