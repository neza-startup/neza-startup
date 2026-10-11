import Editor from '../components/Editor';
import Preview from '../components/Preview';

const BlogPanel = () => {
  return (
    <div className="BlogPanel">
      <h1>Blog Panel</h1>
      <Editor />
      <Preview />
    </div>
  );
};

export default BlogPanel;
