// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default (req, res) => {
  const { name, email, text, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: "mdsaddamvoltas@gmail.com",
    subject: `New mail from ${email}`,
    text: `
    ${name} and phone number is ${phone} from ${email} wrote text :
    ${text}
    `,
  };
  const errr = { error: "error" };
  const succes = {
    succes: "succes",
  };
  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.status(405).send(errr);
    } else {
      res.status(200).send(succes);
      console.log(req.body);
    }
  });
};
