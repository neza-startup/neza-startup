import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from '../pages/Landing.jsx';
import LinkInBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/link-in-bio" element={<LinkInBio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
