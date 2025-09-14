const nodemailer = require("nodemailer");

// Create a reusable transporter
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,       // true if using port 465
  auth: {
    user: "contact@cctechsolutions.dev",
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Function to send emails dynamically
const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: '"CCTech Solutions" <contact@cctechsolutions.dev>',
    to,
    subject,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
