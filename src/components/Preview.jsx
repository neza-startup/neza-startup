import { faArrowTrendUp, faEye, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdown from '../hooks/useMarkdown';
import styles from '../styles/Preview.module.css';
import formatDate from '../utils/index.js';

const Preview = ({ title, setTitle, description, setDescription, image, setImage, hashtags, setHashtags, readTime, setReadTime, trending, setTrending, featured, setFeatured }) => {
  const { markdown, setMarkdown } = useMarkdown();
  const [isEditing, setIsEditing] = useState(true);
  const hashtagList = Array.isArray(hashtags)
    ? hashtags
    : typeof hashtags === 'string'
      ? hashtags.split(',').map((hashtag) => hashtag.trim()).filter(Boolean)
      : [];

  return (
    <div className={styles.preview}>
      {/* {
        isEditing && (
          <div className={styles.editingNotice}>
            <p>You are in editing mode. Click "Guardar" to save your changes.</p>
          </div>
        )
      } */}

      <div className={styles.mode}>
        <h2>{isEditing ? 'Editing' : 'Preview'}</h2>

        <div className={styles.buttons}>
          <button className={styles.editSaveButton} onClick={() => setIsEditing((editing) => !editing)}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button className={styles.post} onClick={() => alert('Post functionality not implemented yet.')} disabled={isEditing}>
            Post
          </button>
        </div>
      </div>

      {/* <p className={styles.notice}>
        {isEditing ? 'You are in editing mode. Click "Save" to save your changes.' : 'You are in preview mode. Click "Edit" to make changes.'}
      </p> */}

      <div className={styles.previewContent}>

        <header className={styles.previewHeader}>
          {isEditing ? (
            <>
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Latest News"
              />
            </>
          ) : <h1>{title || 'Untitled'}</h1>}

          {isEditing ? (
            <>
              <label htmlFor="description">Description:</label>
              <input
                id="description"
                className={styles.descriptionInput}
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Stay updated with the latest news and offers from Neza Startup."
              />
            </>
          ) : <p className={styles.description}>{description}</p>}

          {isEditing ? (
            <input
              id="preview-image"
              className={styles.imageInput}
              type="url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="Enter image URL"
            />
          ) : image && <img src={image} alt={title || 'Article'} />}

          <div className={styles.articleInfo}>
            <span>Published on: <span>{formatDate(new Date().toLocaleDateString())}</span></span>
            <span>Read time: {isEditing && <input
              id="preview-read-time"
              className={styles.readTimeInput}
              type="text"
              value={readTime}
              onChange={(event) => setReadTime(event.target.value)}
              placeholder="5"
              aria-label="Read time in minutes"
            />} {!isEditing && readTime} min read</span>
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
          {isEditing ? (
            <textarea
              id="preview-content"
              className={styles.contentInput}
              value={markdown}
              onChange={(event) => setMarkdown(event.target.value)}
              placeholder="Write your article in Markdown..."
            />
          ) : <ReactMarkdown>{markdown}</ReactMarkdown>}
        </div>

        <hr className={styles.divider} />

        <footer>
          <div className={styles.articleInfo}>
            <label htmlFor="preview-hashtags">Hashtags</label>
            {isEditing && <input
              id="preview-hashtags"
              className={styles.hashtagsInput}
              type="text"
              value={hashtags}
              onChange={(event) => setHashtags(event.target.value)}
              placeholder="#hashtag1 #hashtag2 #hashtag3"
            />}
            {!isEditing && hashtagList.length > 0 && <span className={styles.hashtags}>{
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

          <div className={styles.articleStatus}>
            <label className={styles.statusToggle} htmlFor="preview-trending">
              <input
                id="preview-trending"
                type="checkbox"
                checked={trending}
                disabled={!isEditing}
                onChange={(event) => setTrending(event.target.checked)}
              />
              <span className={styles.trending}><FontAwesomeIcon icon={faArrowTrendUp} /> Trending</span>
            </label>
            <label className={styles.statusToggle} htmlFor="preview-featured">
              <input
                id="preview-featured"
                type="checkbox"
                checked={featured}
                disabled={!isEditing}
                onChange={(event) => setFeatured(event.target.checked)}
              />
              <span className={styles.featured}><FontAwesomeIcon icon={faStar} /> Featured</span>
            </label>
          </div>
        </footer>
      </div >
    </div >
  );
};

export default Preview;
