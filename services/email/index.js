const sgMail = require("@sendgrid/mail");
const { createHttpException } = require("../../helpers");

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailVerificationLetter = async (email, verificationToken) => {
  try {
    await sgMail.send({
      from: "lukast2008@gmail.com", // Use the email address or domain you verified above
      to: email,
      subject: "Sending with Twilio SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: `<a href="http://localhost:3000/api/auth/email/verify/${verificationToken}">Click to verify your email</a>`,
    });
  } 
  catch (err) {
    throw createHttpException(502, `Sendgrid error: ${JSON.stringify(err, null, 2)}`
    );
  }
};

module.exports = { sendEmailVerificationLetter };
