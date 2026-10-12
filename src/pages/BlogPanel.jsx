import { useState } from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import styles from '../styles/BlogPanel.module.css';

const BlogPanel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [readTime, setReadTime] = useState('');
  const [trending, setTrending] = useState(false);
  const [featured, setFeatured] = useState(false);

  return (
    <section className={styles.blogPanel}>
      <h1>Blog Panel</h1>

      {/* <div className={styles.instructions}>
        <p>Use the editor below to create your blog post. You can write in Markdown format, and the preview will update in real-time.</p>
        <p>Once you're satisfied with your post, you can save it to the database.</p>
      </div> */}

      <div className={styles.editorPreviewContainer}>
        <Editor title={title} setTitle={setTitle} description={description} setDescription={setDescription} hashtags={hashtags} setHashtags={setHashtags} readTime={readTime} setReadTime={setReadTime} trending={trending} setTrending={setTrending} featured={featured} setFeatured={setFeatured} />
        <Preview title={title} description={description} hashtags={hashtags} readTime={readTime} trending={trending} featured={featured} />
      </div>
    </section>
  );
};

export default BlogPanel;
