import Newsletter from "../models/newsletter.model.js";

export const postNewsletterSubmission = async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Email added to newsletter successfully" });
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    res.status(500).json({ message: "Error adding email to newsletter list" });
  }
};
