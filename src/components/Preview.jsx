import { faArrowTrendUp, faEye, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import useMarkdown from '../hooks/useMarkdown';
import styles from '../styles/Preview.module.css';
import formatDate from '../utils/index.js';

const Preview = ({ title, description, hashtags, readTime, trending, featured }) => {
  const { markdown } = useMarkdown();
  const hashtagList = Array.isArray(hashtags)
    ? hashtags
    : typeof hashtags === 'string'
      ? hashtags.split(',').map((hashtag) => hashtag.trim()).filter(Boolean)
      : [];

  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <div className={styles.previewContent}>

        <header className={styles.previewHeader}>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}

          <div className={styles.articleInfo}>
            <span>Published on: <span>{formatDate(new Date().toLocaleDateString())}</span></span>
            <span>Read time: <span>{readTime} min read</span></span>
            <span className={styles.shares}>
              <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />&nbsp;
              <button className={styles.shareButton}>
                Share
              </button>
            </span>
          </div>
        </header>

        <hr className={styles.divider} />

        <div className={styles.markdownContent}>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>

        <hr className={styles.divider} />

        <footer>
          <div className={styles.articleInfo}>
            <h3>Hashtags</h3>
            {hashtagList.length > 0 && <span className={styles.hashtags}>{
              hashtagList.map((hashtag, index) => (
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
              0 views
            </span>
            <span className={styles.shares}>
              <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />&nbsp;
              <button className={styles.shareButton}>
                Share
              </button>
            </span>
          </div>

          {(trending || featured) && (
            <div className={styles.articleStatus}>
              {trending && <span className={styles.trending}><FontAwesomeIcon icon={faArrowTrendUp} /> Trending</span>}
              &nbsp;
              {featured && <span className={styles.featured}><FontAwesomeIcon icon={faStar} /> Featured</span>}
            </div>
          )}
        </footer>
      </div >
    </div >
  );
};

export default Preview;
