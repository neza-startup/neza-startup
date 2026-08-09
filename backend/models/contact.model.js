import mongoose from "mongoose";

const ContactFormSchema = new mongoose.Schema({
  subject: { type: String },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const ContactForm = mongoose.model("ContactForm", ContactFormSchema, "ContactForm");

export default ContactForm;
