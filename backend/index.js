import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import nodemailer from "nodemailer";
import twilio from "twilio";

/* EMAIL */
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.mail.me.com';
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

/* WhatsApp */
const WHATSAPP_BOT_ID = process.env.WHATSAPP_BOT_ID;
const WHATSAPP_PHONE_NUMBER = process.env.WHATSAPP_PHONE_NUMBER;
const WHATSAPP_BEARER_TOKEN = process.env.WHATSAPP_BEARER_TOKEN;
const WHATSAPP_API_URL = `https://graph.facebook.com/v22.0/${WHATSAPP_BOT_ID}/messages`;

/* SMS */
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const NOTIFY_PHONE_NUMBER = process.env.NOTIFY_PHONE_NUMBER;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello world!");
})

/* TODO WhatsApp customer */

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
    ...(email && { cc: email, replyTo: email }), // Set cc and replyTo only if email is provided
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
        <span>Sent from Landing</span>`,
  });
};

const sendEmailCustomer = async (subject = "not provided (optional)", name = "not provided (optional)", email = "not provided (optional)") => {
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
    to: email,
    subject,
    html: `
        <span>Hello ${name}:</span>
        <br/><br/>
        <span>Thank you for contacting us.</span>
        <br/>
        <p><b>We have received your information and we will get back to you shortly (please expect to hear from us within 24 hours).</b></p>
        <span>You should also receive a copy of your submission in your inbox.</span>
        <br/><br/>
        <span>Stellar Regards,</span>
        <br/>
        <span>Neza Startup Team</span>`,
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

const sendWhatsAppMessageCustomer = async (subject = "not provided (optional)", name = "not provided (optional)", phone = "not provided (optional)") => {
  const payload = {
    messaging_product: "whatsapp",
    to: phone,

    /* contact_form_submission */

    type: 'template',
    template: {
      name: "lead_customer_notification",
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
            }
          ]
        }
      ]
    }
  };

  return fetch(WHATSAPP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${WHATSAPP_BEARER_TOKEN}`,
    },
    body: JSON.stringify(payload)
  });
};

const postSMS = async (subject = "not provided (optional)", name = "not provided (optional)", email = "not provided (optional)", phone = "not provided (optional)", message = "not provided (optional)") => {
  const smsMessage = `New contact form submission:\n\nSubject: ${subject}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

  return twilioClient.messages.create({
    body: smsMessage,
    from: TWILIO_PHONE_NUMBER,
    to: NOTIFY_PHONE_NUMBER
  });
};

/* const postSMSCustomer = async (name = "not provided (optional)", phone = "not provided (optional)") => {
  const smsMessage = `Hello ${name},\n\nThank you for contacting us. We have received your information and will get back to you shortly.`;

  return twilioClient.messages.create({
    body: smsMessage,
    from: TWILIO_PHONE_NUMBER,
    to: phone
  });
}; */

const ContactFormSchema = new mongoose.Schema({
  subject: { type: String },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const ContactForm = mongoose.model("ContactForm", ContactFormSchema, "ContactForm");

app.post("/api/contact", async (req, res) => {
  const { subject, name, email, phone, message } = req.body;

  try {
    await sendEmail(subject, name, email, phone, message);
    /* const response =  */
    await sendWhatsAppMessage(subject, name, email, phone, message);

    await postSMS(subject, name, email, phone, message);

    await sendEmailCustomer(subject, name, email);

    await sendWhatsAppMessageCustomer(subject, name, phone);

    const newContactForm = new ContactForm({ subject, name, email, phone, message });
    await newContactForm.save();

    /* await postSMSCustomer(name, phone); */

    /* const data = await response.json(); */

    res.status(201).json({
      ContactForm: {
        message: "Contact form submission saved successfully",
      },
      notifications: {
        message: "Email, WhatsApp and SMS messages sent successfully. Customer notified"
      }
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Error processing contact form", error: error.message });
  }
})

const connectDB = async (req, res) => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_URI, { dbName: "Neza" });

    console.log(`MongoDB Connected: ${connect.connection.name}`);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to MongoDB", message: error.message });
  }
};

connectDB();

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const Newsletter = mongoose.model("Newsletter", newsletterSchema, "Newsletter");

app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Email added to newsletter successfully" });
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    res.status(500).json({ message: "Error adding email to newsletter list" });
  }
});

const FormSchema = new mongoose.Schema({
  type: { type: String, enum: ['individuals', 'business'], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  interest: { type: String, enum: ['marketing', 'software', 'both'] },
  message: { type: String, required: true },
  budget: { type: String },
  timeline: { type: String, enum: ['Up to 1 month', 'Between 1 and 3 months', 'From 3 to 6 months', 'Around 6 to 12 months', 'Over 1 year'], required: true },
  link: { type: String },
  channel: { type: String, enum: ['social_media', 'referral', 'search_engine', 'advertisement', 'other', ''] },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const Form = mongoose.model("Form", FormSchema, "Form");

app.post("/api/form", async (req, res) => {
  const { type, name, email, phone, subject, interest, message, budget, timeline, link, channel, comments } = req.body;

  try {
    const newFormSubmission = new Form({ type, name, email, phone, subject, interest, message, budget, timeline, link, channel, comments });
    await newFormSubmission.save();
    res.status(201).json({ message: "Form submission saved successfully" });
  } catch (error) {
    console.error("Error saving form submission:", error);
    res.status(500).json({ message: "Error saving form submission" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
