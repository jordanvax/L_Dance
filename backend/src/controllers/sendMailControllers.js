const { transporter, mailOptions } = require("../services/email");

const sendMail = (req, res) => {
  const option = mailOptions(req.body);

  return transporter
    .sendMail(option)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};

module.exports = {
  sendMail,
};
