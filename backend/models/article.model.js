import moongose from 'mongoose';

const ArticleSchema = new moongose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String },
  authors: { type: [String], required: true, default: ['Neza Startup'] },
  description: { type: String },
  heroImage: { type: String },
  alt: { type: String },
  content: { type: String },
  date: { type: Date, default: Date.now },
  hashtags: { type: [String] },
  readTime: { type: String },
  /* category: { type: String }, */
  /* likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 }, */
  views: { type: Number, default: 0 },
  trending: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
});

/* modelName, schema, collectionName */
const Article = moongose.model('Article', ArticleSchema, 'Articles');

export default Article;
