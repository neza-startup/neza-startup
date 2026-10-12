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

          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" placeholder="Enter image URL" />

        </fieldset>
      </form>
    </div>
  );
};

export default Editor;
