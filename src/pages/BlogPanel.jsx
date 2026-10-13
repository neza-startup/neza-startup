import { useState } from 'react';
import Preview from '../components/Preview';
import styles from '../styles/BlogPanel.module.css';

const BlogPanel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [hashtags, setHashtags] = useState('');
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
        <Preview title={title} setTitle={setTitle} description={description} setDescription={setDescription} image={image} setImage={setImage} hashtags={hashtags} setHashtags={setHashtags} trending={trending} setTrending={setTrending} featured={featured} setFeatured={setFeatured} />
      </div>
    </section>
  );
};

export default BlogPanel;
