import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop,
        behavior: "auto",
      });
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTarget);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

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
