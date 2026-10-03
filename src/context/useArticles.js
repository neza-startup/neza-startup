import { useContext } from "react";
import ArticleContext from "./articleContextValue";

export default function useArticles() {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error("useArticles must be used inside ArticleProvider");
  }

  return context;
}
