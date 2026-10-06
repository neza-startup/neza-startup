import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ behavior: "smooth" });
    };

    requestAnimationFrame(scrollToTarget);
  }, [hash]);

  return null;
};

const Layout = () => {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
