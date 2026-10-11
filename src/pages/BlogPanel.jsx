import Editor from '../components/Editor';
import Preview from '../components/Preview';
import styles from '../styles/BlogPanel.module.css';

const BlogPanel = () => {
  return (
    <div className={styles.blogPanel}>
      <h1>Blog Panel</h1>
      <Editor />
      <Preview />
    </div>
  );
};

export default BlogPanel;
