import { useEffect, useState } from "react";
import ArticleContext from "./articleContextValue";

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/data/articles.json");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        setArticles(await response.json());
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
}
