import { faArrowTrendUp, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import LastCTA from "../components/LastCTA.jsx";
import useArticles from "../hooks/useArticles.js";
import styles from "../styles/Article.module.css";

const Article = () => {
  const { articleId } = useParams();
  const { articles } = useArticles();
  const article = articles.find(({ id }) => id === Number(articleId));

  const articleAuthors = article?.author ?? [];

  return (
    <article className={styles.article}>
      <header>

        {article?.image && <img src={article.image} alt={article.alt} />}
        <h1>{article?.title ?? `Article ${articleId ?? ""}`}</h1>

        <p className={styles.description}>
          {article?.description}
        </p>
      </header>

      {article?.author && (
        <div className={styles.author}>
          <span>By </span>
          {articleAuthors.map((articleAuthor, index) => (
            <span key={`${articleAuthor.name}-${index}`} className={styles.authorNameBlock}>
              {articleAuthor.img && (
                <img
                  src={articleAuthor.img}
                  alt={articleAuthor.name}
                  className={styles.authorImage}
                />
              )}
              <span className={styles.authorName}>
                &nbsp;{articleAuthor.name}
              </span>
              {index < articleAuthors.length - 2 && <span>, </span>}
              {index === articleAuthors.length - 2 && articleAuthors.length > 1 && <span>&nbsp;and </span>}
            </span>
          ))}
        </div>
      )}

      <div className={styles.articleInfo}>
        <span>Published on: <span>{article?.date}</span></span>
        <span>Read time: <span>{article?.readTime && `${article.readTime} min read`}</span></span>
      </div>

      {/* {article?.date && <p className={styles.date}>{article.date}</p>}
      {article?.readTime && <p className={styles.readTime}>{article.readTime} min read</p>}
      {article?.hashtags && <p className={styles.hashtags}>{article.hashtags.join(" ")}</p>}
      {article?.image && <img src={article.image} alt={article.alt} />}
      <div className={styles.content}>
        <p>{article?.description ?? content}</p>
      </div> */}

      <div className={styles.content}>
        {article?.content && article.content.map((section, index) => (
          <div key={index}>
            {section.paragraph1 && <p>{section.paragraph1}</p>}
            {section.paragraph2 && <p>{section.paragraph2}</p>}
            {section.paragraph3 && <p>{section.paragraph3}</p>}
          </div>
        ))}
      </div>

      <footer>
        <div className={styles.articleInfo}>
          <h3>Hashtags</h3>
          {article?.hashtags && <span className={styles.hashtags}>{article.hashtags.join(" ")}</span>}
        </div>

        <div className={styles.articleStats}>
          {/* <span className={styles.comments}>{article.comments} comments</span>
          <span className={styles.likes}>{article.likes} likes</span>
          <span className={styles.shares}>{article.shares} shares</span> */}
          <span className={styles.views}>
            <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />&nbsp;
            {article?.views && `${article.views} views`}
          </span>
        </div>

        {
          (article.trending || article.featured) && (
            <div className={styles.articleStatus}>
              {article.trending && <span className={styles.trending}><FontAwesomeIcon icon={faArrowTrendUp} /> Trending</span>}
              &nbsp;
              {article.featured && <span className={styles.featured}><FontAwesomeIcon icon={faStar} /> Featured</span>}
            </div>
          )}

        <div className={styles.latestArticles}>
          <h3>Latest Articles</h3>
          <ul>
            {articles
              .filter(({ id }) => id !== Number(articleId))
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 2)
              .map(({ id, title }) => (
                <li key={id}>
                  <Link to={`/blog/article/${id}`}>{title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </footer>

      <LastCTA />
    </article>
  );
};

export default Article;
