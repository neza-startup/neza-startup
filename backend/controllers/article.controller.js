import Article from '../models/article.model.js';

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Error fetching articles' });
  }
};

export const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOne({ id });
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ message: 'Error fetching article' });
  }
};

export const postArticle = async (req, res) => {
  const { id, title, authors, description, image, alt, content, date, hashtags, readTime, views, trending, featured } = req.body;
  try {
    const newArticle = new Article({ id, title, authors, description, image, alt, content, date, hashtags, readTime, views, trending, featured });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Error creating article' });
  }
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, authors, publishedDate } = req.body;
  try {
    const updatedArticle = await Article.findOneAndUpdate(
      { id },
      { title, content, authors, publishedDate },
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(updatedArticle);
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ message: 'Error updating article' });
  }
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await Article.findOneAndDelete({ id });
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ message: 'Error deleting article' });
  }
};
