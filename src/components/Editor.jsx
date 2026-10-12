import useMarkdown from '../hooks/useMarkdown';
import styles from '../styles/Editor.module.css';

const Editor = ({ title, setTitle, description, setDescription, hashtags, setHashtags, readTime, setReadTime, trending, setTrending, featured, setFeatured }) => {
  const { markdown, setMarkdown } = useMarkdown();

  const handleChange = (event) => {
    setMarkdown(event.target.value);
    console.log('Markdown updated:', event.target.value);
  };

  return (
    <div className={styles.editor}>
      <h2>Editor</h2>
      <form className={styles.form}>

        <fieldset>
          <legend>Article information</legend>

          <label htmlFor="markdown">Content:</label>
          <textarea value={markdown} onChange={handleChange} id="markdown" placeholder="Write your article in Markdown..." />

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter title"
          />

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Enter description" />

          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" placeholder="Enter image URL" />

          <label htmlFor="hashtags">Hashtags (comma-separated):</label>
          <input type="text" id="hashtags" name="hashtags" value={hashtags} onChange={(event) => setHashtags(event.target.value)} placeholder="#hashtag1, #hashtag2" />

          <label htmlFor="readTime">Read Time:</label>
          <input type="text" id="readTime" name="readTime" value={readTime} onChange={(event) => setReadTime(event.target.value)} placeholder="e.g., 5 min read" />

          <label htmlFor="trending">Trending:</label>
          <input type="checkbox" id="trending" name="trending" checked={trending} onChange={(event) => setTrending(event.target.checked)} />

          <label htmlFor="featured">Featured:</label>
          <input type="checkbox" id="featured" name="featured" checked={featured} onChange={(event) => setFeatured(event.target.checked)} />
        </fieldset>
      </form>
    </div>
  );
};

export default Editor;
