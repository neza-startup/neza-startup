import Form from "../models/form.model.js";
import formatMexicanPhone from "../utils/index.js";

export const postFormRequest = async (req, res) => {
  const { type, name, email, phone, subject, interest, message, budget, timeline, link, channel, comments } = req.body;

  const phoneSanitized = formatMexicanPhone(phone);

  try {
    const newFormSubmission = new Form({ type, name, email, phone: phoneSanitized, subject, interest, message, budget, timeline, link, channel, comments });
    await newFormSubmission.save();
    res.status(201).json({ message: "Form submission saved successfully" });
  } catch (error) {
    console.error("Error saving form submission:", error);
    res.status(500).json({ message: "Error saving form submission" });
  }
};
