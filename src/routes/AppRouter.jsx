import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleContext.jsx";
import Layout from "../layout/Layout.jsx";
import Article from "../pages/Article.jsx";
import Blog from "../pages/Blog.jsx";
import Form from "../pages/Form.jsx";
import Landing from '../pages/Landing.jsx';
import LinkInBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/link-in-bio" element={<LinkInBio />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/blog"
            element={
              <ArticleProvider>
                <Outlet />
              </ArticleProvider>
            }
          >
            <Route index element={<Blog />} />
            <Route path="article/:articleId" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
