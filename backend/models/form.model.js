import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  type: { type: String, enum: ['individuals', 'business'], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  interest: { type: String, enum: ['marketing', 'software', 'both', ''] },
  message: { type: String, required: true },
  budget: { type: String },
  timeline: { type: String, enum: ['up_to_1_month', 'between_1_and_3_months', 'from_3_to_6_months', 'around_6_to_12_months', 'over_1_year'], required: true },
  modality: { type: String, enum: ['remote', 'on_site', 'hybrid', ''] },
  link: { type: String },
  channel: { type: String, enum: ['social_media', 'referral', 'search_engine', 'advertisement', 'contacted_by_us', 'other', ''] },
  comments: { type: String },
  notify: { type: Boolean/* , default: true */ },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const Form = mongoose.model("Form", FormSchema, "Form");

export default Form;
