import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from '../pages/Landing.jsx';
import LinkIBio from "../pages/LinkInBio.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/link-in-bio" element={<LinkIBio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
