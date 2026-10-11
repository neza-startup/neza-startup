import Editor from '../components/Editor';
import Preview from '../components/Preview';
import styles from '../styles/BlogPanel.module.css';

const BlogPanel = () => {
  return (
    <section className={styles.blogPanel}>
      <h1>Blog Panel</h1>

      {/* <div className={styles.instructions}>
        <p>Use the editor below to create your blog post. You can write in Markdown format, and the preview will update in real-time.</p>
        <p>Once you're satisfied with your post, you can save it to the database.</p>
      </div> */}

      <div className={styles.editorPreviewContainer}>
        <Editor />
        <Preview />
      </div>
    </section>
  );
};

export default BlogPanel;
