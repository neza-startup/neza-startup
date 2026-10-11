import { useContext } from 'react';
import MarkdownContext from '../context/markdownContextValue';

export default function useMarkdown() {
  const context = useContext(MarkdownContext);

  if (!context) {
    throw new Error('useMarkdown must be used inside MarkdownProvider');
  }

  return context;
}
