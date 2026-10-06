import { faArrowTrendUp, faEye, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import LastCTA from "../components/LastCTA.jsx";
import useArticles from "../hooks/useArticles.js";
import styles from "../styles/Article.module.css";

const Article = () => {
  const { articleId } = useParams();
  const { articles, loading, error } = useArticles();
  const article = articles.find(({ id }) => id === Number(articleId));

  const articleAuthors = article?.author ?? [];

  if (loading) {
    return (
      <article className={styles.article}>
        <p>Loading article...</p>
      </article>
    );
  }

  if (error) {
    return (
      <article className={styles.article}>
        <p>Unable to load article.</p>
        {/* try to reload page */}
        <button onClick={() => window.location.reload()} className={styles.reloadButton}>Reload Page</button>
      </article>
    );
  }

  if (!article) {
    return (
      <article className={styles.article}>
        <p>Article not found.</p>
        <Link to="/blog" className={styles.backToBlogLink}>Back to Blog</Link>
      </article>
    );
  }

  const handleShare = () => {
    const shareData = {
      title: 'Neza Startup',
      text: 'Check out Neza Startup!',
      url: `https://www.nezastartup.com/blog/article/${articleId}`,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <title>{`Neza Blog - ${article?.title}`}</title>
        <meta name="description" content={article?.description} />

        <h1>Neza Blog</h1>
        {/* {
          loading ? (
            <p>Loading article...</p>
          ) : error ? (
            <p>Unable to load article.</p>
          ) : !article ? (
            <p>Article not found.</p>
          ) : null
        } */}
        {article?.image && <img src={article.image} alt={article.alt} />}
        <h1>{article?.title}</h1>

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
        <span className={styles.shares}>
          <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />&nbsp;
          <button onClick={handleShare} className={styles.shareButton}>
            Share
          </button>
        </span>
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
            {section.paragraph1 && section.paragraph2 && article.image && (
              <img src={article.image} alt={article.alt} className={styles.contentImage} />
            )}
            {section.paragraph2 && <p>{section.paragraph2}</p>}
            {section.paragraph2 && section.paragraph3 && article.image && (
              <img src={article.image} alt={article.alt} className={styles.contentImage} />
            )}
            {section.paragraph3 && <p>{section.paragraph3}</p>}
          </div>
        ))}
      </div>

      <footer>
        <div className={styles.articleInfo}>
          <h3>Hashtags</h3>
          {article?.hashtags && <span className={styles.hashtags}>{
            article.hashtags.map((hashtag, index) => (
              <span key={index} className={styles.hashtag}>
                {hashtag}
              </span>
            ))
          }</span>}
        </div>

        <div className={styles.articleStats}>
          {/* <span className={styles.comments}>{article.comments} comments</span>
          <span className={styles.likes}>{article.likes} likes</span>
          <span className={styles.shares}>{article.shares} shares</span> */}
          <span className={styles.views}>
            <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />&nbsp;
            {article?.views && `${article.views} views`}
          </span>
          <span className={styles.shares}>
            <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />&nbsp;
            <button onClick={handleShare} className={styles.shareButton}>
              Share
            </button>
          </span>
        </div>

        {(article?.trending || article?.featured) && (
          <div className={styles.articleStatus}>
            {article?.trending && <span className={styles.trending}><FontAwesomeIcon icon={faArrowTrendUp} /> Trending</span>}
            &nbsp;
            {article?.featured && <span className={styles.featured}><FontAwesomeIcon icon={faStar} /> Featured</span>}
          </div>
        )}

        <div className={styles.latestArticles}>
          <h2>Latest Articles</h2>
          <ul>
            {articles
              .filter(({ id }) => id !== Number(articleId))
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 2)
              .map(({ id, title, description }) => (
                <li key={id}>
                  <img src={articles.find(article => article.id === id)?.image} alt={articles.find(article => article.id === id)?.alt} className={styles.latestArticleImage} />
                  <h3 className={styles.latestArticleTitle}>{title}</h3>
                  <p className={styles.latestArticleDescription}>{description}</p>
                  <Link to={`/blog/article/${id}`} className={styles.latestArticleLink}>Read More &rarr;</Link>
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
