import ReactMarkdown from 'react-markdown';
import useMarkdown from '../hooks/useMarkdown';

const Preview = () => {
  const { markdown } = useMarkdown();

  return (
    <div className="preview">
      <h2>Preview</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Preview;
