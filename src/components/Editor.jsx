import useMarkdown from '../hooks/useMarkdown';
import styles from '../styles/Editor.module.css';

const Editor = () => {
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
          <input type="text" id="title" name="title" placeholder="Enter title" />

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" placeholder="Enter description" />

          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" placeholder="Enter image URL" />

          <label htmlFor="hashtags">Hashtags (comma-separated):</label>
          <input type="text" id="hashtags" name="hashtags" placeholder="#hashtag1, #hashtag2" />

          <label htmlFor="readTime">Read Time:</label>
          <input type="text" id="readTime" name="readTime" placeholder="e.g., 5 min read" />

          {/* <label htmlFor="trending">Trending:</label>
          <input type="checkbox" id="trending" name="trending" />

          <label htmlFor="featured">Featured:</label>
          <input type="checkbox" id="featured" name="featured" /> */}
        </fieldset>
      </form>
    </div>
  );
};

export default Editor;
