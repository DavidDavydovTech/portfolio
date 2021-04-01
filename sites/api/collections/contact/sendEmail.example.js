// -- Package Imports --
const { Router } = require('express');
const nodemailer = require('nodemailer')

// -- Set up Vars --
const router = Router();
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'natalieperetz25@gmail.com', // example email
    pass: 'Iphone0611@', // <== example password
  },
});

// -- Routes --
router.post('/', (req, res) => {
  const {
    fullname,
    phone,
    email,
    message,
  } = req.body;
   
  transport.sendMail({
    from: `${fullname} <${email}>'`, // sender address
    to: 'natalieperetz25@gmail.com', // list of receivers
    subject: `Contact from ${fullname} (Otzar HaSefer)`, // Subject line
    text: `Name: ${fullname}
Email: ${email}
Phone: ${phone}

Message:
${message}`, // plain text body
  })
    .then(() => res.status(200).send('Success'))
    .catch((err) => res.status(500).send(err.message));
});

// -- Exports --
module.exports = router;
