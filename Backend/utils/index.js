const nodemailer = require("nodemailer");
require("dotenv").config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api", 
    pass: process.env.MAILTRAP_PASSWORD, //  API token from Mailtrap
  },
  tls: {
    rejectUnauthorized: false, // required for Mailtrap sandbox
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: '"E-Shop" <no-reply@mailtrap.io>',
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(" Email sent successfully", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email", error);
    throw error;
  }
};

module.exports = sendEmail;
