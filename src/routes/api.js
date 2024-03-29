var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const multer = require('multer');
const path = require('path');

// Uncomment if you want to use diskStorage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "..", "..", "public", "uploads"))
//   },

//   filename: (req, file, cb) => {
//     cb(null, `CV-${req.body.name}${path.extname(file.originalname)}`)
//   }
// })

const storage = multer.memoryStorage();

const upload = multer({ storage });

const { GOOGLE_OAUTH2_ID, GOOGLE_OAUTH2_SECRET, GOOGLE_OAUTH2_REDIRECT_URI, GOOGLE_OAUTH2_REFRESH_TOKEN, EMAIL } = require('../env/variables');

// Contacto
router.post("/send-email-contacto", (req, res) => {
  // console.log("body", req.body)
  const { name, email, phone, message, state, company } = req.body;

  const OAuth2Client = new google.auth.OAuth2(GOOGLE_OAUTH2_ID, GOOGLE_OAUTH2_SECRET, GOOGLE_OAUTH2_REDIRECT_URI);

  OAuth2Client.setCredentials({ refresh_token: GOOGLE_OAUTH2_REFRESH_TOKEN });

  const sendEmail = async () => {
    try {
      const accesToken = await OAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: EMAIL,
          clientId: GOOGLE_OAUTH2_ID,
          clientSecret: GOOGLE_OAUTH2_SECRET,
          refreshToken: GOOGLE_OAUTH2_REFRESH_TOKEN,
          accessToken: accesToken,
        }
      })

      const mailOptions = {
        from: `CONTACTO WEB - <info@alertaseguridadprivada.com.ar>`,
        to: EMAIL,
        subject: `CONTACTO - ${name} ${email} ${phone}`,
        html: `
        <h1>Información del contacto</h1>
        <p>Nombre: ${name}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${phone}</p>
        <p>Mensaje: ${message}</p>
        <p>Localidad: ${state}</p>
        <p>Compañia: ${company}</p>`
      }

      const mailOptionsLead = {
        from: `Info Alertas Seguridad Privada - <info@alertaseguridadprivada.com.ar>`,
        to: email,
        subject: `Gracias por contactarnos ${name}!`,
        html: `
        <h1>Gracias por contactarnos ${name}!</h1>
        <p>Un asesor de nuestro equipo se contactara con vos.</p>`
      }

      const result = await transporter.sendMail(mailOptions);
      const resultLead = await transporter.sendMail(mailOptionsLead);
      console.log("Email sent to info", result.response);
      console.log("Email sent to lead", resultLead.response);
    } catch (error) {
      console.log("Failed to send email:", error)
    }
  }

  sendEmail()
    .then((result) => res.status(200).send(`Email send to ${email} and ${EMAIL}`))
    .catch((error) => console.log(error));
})

router.post("/send-email-rrhh", upload.any(), (req, res) => {
  // console.log("body", req.body)
  const { name, email, phone, howYouKnowUs } = req.body;
  const [file] = req.files;

  const OAuth2Client = new google.auth.OAuth2(GOOGLE_OAUTH2_ID, GOOGLE_OAUTH2_SECRET, GOOGLE_OAUTH2_REDIRECT_URI);

  OAuth2Client.setCredentials({ refresh_token: GOOGLE_OAUTH2_REFRESH_TOKEN });

  const sendEmail = async () => {
    try {
      const accesToken = await OAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: EMAIL,
          clientId: GOOGLE_OAUTH2_ID,
          clientSecret: GOOGLE_OAUTH2_SECRET,
          refreshToken: GOOGLE_OAUTH2_REFRESH_TOKEN,
          accessToken: accesToken,
        }
      })

      const mailOptions = {
        from: `CONTACTO WEB - <info@alertaseguridadprivada.com.ar>`,
        to: EMAIL,
        subject: `CONTACTO - ${name} ${email} ${phone}`,
        html: `
        <h1>Información del contacto</h1>
        <p>Nombre: ${name}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${phone}</p>
        <p>¿Cómo nos conociste?: ${howYouKnowUs}</p>`,
        attachments: [
          {
            filename: file.originalname,
            content: file.buffer,
            contentType: file.mimetype
          }
        ]
      }

      const mailOptionsLead = {
        from: `Info Alertas Seguridad Privada - <info@alertaseguridadprivada.com.ar>`,
        to: email,
        subject: `Gracias por contactarnos ${name}!`,
        html: `
        <h1>Gracias por contactarnos ${name}!</h1>
        <p>Un asesor de nuestro equipo de RRHH se contactara con vos.</p>`
      }

      const result = await transporter.sendMail(mailOptions);
      const resultLead = await transporter.sendMail(mailOptionsLead);
      console.log("Email sent to info", result.response);
      console.log("Email sent to lead", resultLead.response);
    } catch (error) {
      console.log("Failed to send email:", error)
    }
  }

  sendEmail()
    .then((result) => res.status(200).send(`Email send to ${email} and ${EMAIL}`))
    .catch((error) => console.log(error));
})

module.exports = router;
