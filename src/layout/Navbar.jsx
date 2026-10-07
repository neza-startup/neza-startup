import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import icon from '../assets/icon.svg';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { pathname: currentPath, state } = useLocation();
  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();

    /* If we have a previous location saved, go back there. */
    if (state?.from === 'article') {
      navigate(-1);
      return;
    }

    /* If we are directly on an article, go back to the Blog. */
    if (currentPath.startsWith('/blog/article/')) {
      navigate('/blog');
      return;
    }

    /*  Default fallback. */
    navigate('/');
  };

  /* if we are not in root */
  const isNotRoot = currentPath !== '/';

  /* if (isNotRoot) {
    return null;
  } */

  const pathname = `home${currentPath}`;

  return (
    <nav className={styles.navbar}>

      {
        isNotRoot && (
          currentPath === "/blog" ? (
            <HashLink smooth to="/#newsletter" className={styles.navbarLink}>
              <img src={icon} alt="Back to landing page newsletter section" className={styles.icon} />
              {pathname}
            </HashLink>
          ) : (
            <Link onClick={goBack} className={styles.navbarLink}>
              <img src={icon} alt="Go back" className={styles.icon} />
              {pathname}
            </Link>
          )
        )
      }

      {/* <div className={styles.logoContainer}> */}
      {/* <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
        <span className={styles.brandName}>Neza Startup</span> */}
      {/* <a href="/" rel='noopener noreferrer' className={styles.linkImage}> */}
      <HashLink to="/#hero" smooth className={styles.linkImage}>
        <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
      </HashLink>
      {/* <span className={styles.brandName}>Neza Startup</span> */}
      {/* </a> */}
      {/*  </div> */}
    </nav>
  )
}

export default Navbar
