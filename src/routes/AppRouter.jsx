import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form.jsx";
import Landing from '../pages/Landing.jsx';
import LinkInBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/link-in-bio" element={<LinkInBio />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
