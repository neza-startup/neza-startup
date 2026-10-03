import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.svg';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
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
          <Link to="/blog" onClick={goBack} className={styles.navbarLink}>
            <img src={icon} alt="Back to landing page" className={styles.icon} />
            {/* &#8592;  */}{pathname}
          </Link>
        )
      }

      {/* <div className={styles.logoContainer}> */}
      {/* <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
        <span className={styles.brandName}>Neza Startup</span> */}
      {/* <a href="/" rel='noopener noreferrer' className={styles.linkImage}> */}
      <Link to="/">
        <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
      </Link>
      {/* <span className={styles.brandName}>Neza Startup</span> */}
      {/* </a> */}
      {/*  </div> */}
    </nav>
  )
}

export default Navbar
