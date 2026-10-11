import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleContext.jsx";
import { MarkdownProvider } from "../context/MarkdownContext.jsx";
import Layout from "../layout/Layout.jsx";
import Article from "../pages/Article.jsx";
import Blog from "../pages/Blog.jsx";
import BlogPanel from "../pages/BlogPanel.jsx";
import Form from "../pages/Form.jsx";
import Landing from '../pages/Landing.jsx';
import LinkInBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ArticleProvider>
        <MarkdownProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/link-in-bio" element={<LinkInBio />} />
              <Route path="/form" element={<Form />} />
              <Route path="/blog">
                <Route index element={<Blog />} />
                <Route path="article/:articleId" element={<Article />} />
              </Route>
              <Route path="/blog-panel" element={<BlogPanel />} />
            </Route>
          </Routes>
        </MarkdownProvider>
      </ArticleProvider>
    </BrowserRouter>
  )
}

export default AppRouter
