import useMarkdown from '../hooks/useMarkdown';

const Editor = () => {
  const { markdown, setMarkdown } = useMarkdown();

  const handleChange = (event) => {
    setMarkdown(event.target.value);
    console.log('Markdown updated:', event.target.value);
  };

  return (
    <div className="editor">
      <h2>Editor</h2>
      <textarea value={markdown} onChange={handleChange} />
    </div>
  );
};

export default Editor;
