import mongoose from "mongoose";

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
  channel: { type: String, enum: ['social_media', 'referral', 'search_engine', 'advertisement', 'contacted_by_us', 'other', ''] },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const Form = mongoose.model("Form", FormSchema, "Form");

export default Form;
