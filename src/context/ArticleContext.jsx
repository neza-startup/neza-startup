import { useEffect, useState } from "react";
import ArticleContext from "./articleContextValue";

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, loading, error }}>
      {children}
    </ArticleContext.Provider>
  );
}
