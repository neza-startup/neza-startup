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

const sendWhatsAppMessageCustomer = async (name = "not provided (optional)", phone = "not provided (optional)") => {

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
              text: name
            }
          ]
        }
      ]
    }
  };

  const response = await fetch(WHATSAPP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${WHATSAPP_BEARER_TOKEN}`,
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  console.log("WhatsApp message to customer response:", data);

  if (!response.ok) {
    console.error("Error sending WhatsApp message to customer:", data);
    throw new Error(data.error?.message || "Error sending WhatsApp message to customer");
  }

  return data;
};

/* const postSMS = async (subject = "not provided (optional)", name = "not provided (optional)", email = "not provided (optional)", phone = "not provided (optional)", message = "not provided (optional)") => {
  const smsMessage = `New contact form submission:\n\nSubject: ${subject}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

  return twilioClient.messages.create({
    body: smsMessage,
    from: TWILIO_PHONE_NUMBER,
    to: NOTIFY_PHONE_NUMBER
  });
}; */

/* const postSMSCustomer = async (name = "not provided (optional)", phone = "not provided (optional)") => {
  const smsMessage = `Hello ${name},\n\nThank you for contacting us. We have received your information and will get back to you shortly.`;

  return twilioClient.messages.create({
    body: smsMessage,
    from: TWILIO_PHONE_NUMBER,
    to: phone
  });
}; */

export {
  sendEmail,
  sendEmailCustomer,
  sendWhatsAppMessage,
  sendWhatsAppMessageCustomer
};
