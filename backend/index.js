import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.mail.me.com';
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

const WHATSAPP_BOT_ID = process.env.WHATSAPP_BOT_ID;
const WHATSAPP_PHONE_NUMBER = process.env.WHATSAPP_PHONE_NUMBER;
const WHATSAPP_BEARER_TOKEN = process.env.WHATSAPP_BEARER_TOKEN;
const WHATSAPP_API_URL = `https://graph.facebook.com/v22.0/${WHATSAPP_BOT_ID}/messages`;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const sendEmail = async (subject = "not provided (optional)", name = "not provided (optional)", email = "not provided (optional)", phone = "not provided (optional)", message = "not provided (optional)") => {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter.sendMail({
    from: SMTP_FROM,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject,
    html: `
        <span>Hello Elviro:</span>
        <br/><br/>
        <span>I'm</span> <b>${name}</b>,
        <br/>
        <p>"${message}"</p>
        <br/>
        <span>Email: <b>${email}</b></span>
        <br/>
        <span>Phone: <b>${phone}</b></span>
        <br/><br/>
        <span>Sent from Landing Page</span>`,
  });
};

const sendWhatsAppMessage = async (subject = "not provided (optional)", name = "not provided (optional)", email = "not provided (optional)", phone = "not provided (optional)", message = "not provided (optional)") => {
  const payload = {
    messaging_product: "whatsapp",
    to: WHATSAPP_PHONE_NUMBER,

    /* contact_form_submission */

    type: 'template',
    template: {
      name: "lead",
      language: {
        code: "en"
      },
      components: [
        {
          type: "body",
          parameters: [

            {
              type: "text",
              text: subject
            },
            {
              type: "text",
              text: name
            },
            {
              type: "text",
              text: email
            },
            {
              type: "text",
              text: phone
            },
            {
              type: "text",
              text: message
            }
          ]
        }
      ]
    }
  }

  return fetch(WHATSAPP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${WHATSAPP_BEARER_TOKEN}`,
    },
    body: JSON.stringify(payload)
  });
};

app.post("/api/contact", async (req, res) => {
  const { subject, name, email, phone, message } = req.body;

  try {
    await sendEmail(subject, name, email, phone, message);
    /* const response =  */
    await sendWhatsAppMessage(subject, name, email, phone, message);

    /* const data = await response.json(); */

    res.status(200).json({ message: "Email and WhatsApp message sent successfully"/* , data  */ });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
