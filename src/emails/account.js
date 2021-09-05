const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "kartikey0099.cse19@chitkara.edu.in",
//   from: "kartikeykesarwani.2@gmail.com",
//   subject: "This is my first creation",
//   text: "I hope this one actually gets to you",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kartikeykesarwani.2@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}, Let me know how you get along with app`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kartikeykesarwani.2@gmail.com',
    subject: 'Sorry to see you go!',
    text: `GoodBye, ${name}, I hope to see you soon!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
