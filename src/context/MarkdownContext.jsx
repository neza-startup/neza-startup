import { useState } from 'react';
import MarkdownContext from './markdownContextValue';

export function MarkdownProvider({ children }) {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
}
