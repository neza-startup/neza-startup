import Form from "../models/form.model.js";
import { sendEmail, sendEmailCustomer, sendWhatsAppMessage, sendWhatsAppMessageCustomer } from "../services/notifications.js";
import formatMexicanPhone from "../utils/index.js";

export const postFormRequest = async (req, res) => {
  const { type, name, email, phone, subject, interest, message, budget, timeline, link, channel, comments, notify } = req.body;

  const phoneSanitized = formatMexicanPhone(phone);

  try {
    const newFormSubmission = new Form({ type, name, email, phone: phoneSanitized, subject, interest, message, budget, timeline, link, channel, comments, notify });
    await newFormSubmission.save();

    await sendEmail(subject, name, email, phoneSanitized, message);
    await sendWhatsAppMessage(subject, name, email, phoneSanitized, message);

    if (notify) {
      await sendEmailCustomer(subject, name, email);
      await sendWhatsAppMessageCustomer(name, phoneSanitized);
    }

    res.status(201).json({ FormSubmission: "Form submission saved successfully", notify: notify });
  } catch (error) {
    console.error("Error saving form submission:", error);
    res.status(500).json({ message: "Error saving form submission" });
  }
};
