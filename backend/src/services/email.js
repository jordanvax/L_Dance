const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SENDIN,
  port: process.env.SMTP_PORT_SENDIN,
  secure: false,
  auth: {
    user: process.env.SMTP_SENDIN_USER,
    pass: process.env.SMTP_SENDIN_PASSWORD,
  },
});

const mailOptions = (data) => ({
  from: data.email,
  to: "association.l.dance@gmail.com", // this is the address to which the email will be sent
  subject: data.subject,
  text: `${data.description} \n\n Name: ${data.name} \n\n Email: ${data.email}`,
  html: `<p>${data.description}</p> <p>Name: ${data.name}</p> <p>Email: ${data.email}</p>`,
});

module.exports = {
  transporter,
  mailOptions,
};
