import ContactForm from "../models/contact.model.js";
import { sendEmail, sendEmailCustomer, sendWhatsAppMessage, sendWhatsAppMessageCustomer } from "../services/notifications.js";
import formatMexicanPhone from "../utils/index.js";

export const postContactForm = async (req, res) => {
  const { subject, name, email, phone, message } = req.body;

  const phoneSanitized = formatMexicanPhone(phone);

  try {
    await sendEmail(subject, name, email, phoneSanitized, message);
    /* const response =  */
    await sendWhatsAppMessage(subject, name, email, phoneSanitized, message);

    /* await postSMS(subject, name, email, phone, message); */

    await sendEmailCustomer(subject, name, email);

    await sendWhatsAppMessageCustomer(name, phoneSanitized);

    const newContactForm = new ContactForm({ subject, name, email, phone: phoneSanitized, message });
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
}
