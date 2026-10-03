import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles.js";
import styles from "../styles/Article.module.css";

const Article = ({ title, content, author, date }) => {
  const { articleId } = useParams();
  const { articles } = useArticles();
  const article = articles.find(({ id }) => id === Number(articleId));

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
