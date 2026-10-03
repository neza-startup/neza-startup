import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "../styles/Article.module.css";

const Article = ({ title, content, author, date }) => {
  const { state } = useLocation();
  const { articleId } = useParams();
  const [article, setArticle] = useState(state?.article ?? null);

  useEffect(() => {
    if (state?.article) {
      setArticle(state.article);
      return;
    }

    const fetchArticle = async () => {
      try {
        const response = await fetch("/data/articles.json");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const articles = await response.json();
        setArticle(articles.find(({ id }) => id === Number(articleId)));
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [articleId, state]);

  const articleAuthors = article?.author ?? (author ? [{ name: author }] : []);

  return (
    <article className={styles.article}>
      {article?.image && <img src={article.image} alt={article.alt} />}
      <h2>{article?.title ?? title ?? `Article ${articleId ?? ""}`}</h2>
      <p>{article?.description ?? content}</p>
      <footer>
        <span>By {articleAuthors.map((articleAuthor) => articleAuthor.name).join(" and ")}</span>
        <span>{article?.date ?? date}</span>
        {article?.readTime && <span>{article.readTime} min read</span>}
      </footer>
      {article?.hashtags && <p>{article.hashtags.join(" ")}</p>}
    </article>
  );
};

export default Article;
