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
      <textarea value={markdown} onChange={handleChange} />
    </div>
  );
};

export default Editor;
