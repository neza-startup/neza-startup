import icon from '../assets/icon.svg';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {

  /* if we are not in root */
  const isNotRoot = window.location.pathname !== '/';

  /* if (isNotRoot) {
    return null;
  } */

  const pathname = window.location.pathname;

  return (
    <nav className={styles.navbar}>

      {
        isNotRoot && (
          <a href="/" className={styles.navbarLink}>
            <img src={icon} alt="Back to landing page" className={styles.icon} />
            {/* &#8592;  */}/home{pathname}
          </a>
        )
      }

      {/* <div className={styles.logoContainer}> */}
      {/* <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
        <span className={styles.brandName}>Neza Startup</span> */}
      {/* <a href="/" rel='noopener noreferrer' className={styles.linkImage}> */}
      <a href="/#hero">
        <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
      </a>
      {/* <span className={styles.brandName}>Neza Startup</span> */}
      {/* </a> */}
      {/*  </div> */}
    </nav>
  )
}

export default Navbar
