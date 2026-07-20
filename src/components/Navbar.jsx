import logo from '../assets/logo.svg'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.logoContainer}> */}
      {/* <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
        <span className={styles.brandName}>Neza Startup</span> */}
      {/* <a href="/" rel='noopener noreferrer' className={styles.linkImage}> */}
      <img src={logo} alt="Neza Startup Logo" className={styles.logo} />
      {/* <span className={styles.brandName}>Neza Startup</span> */}
      {/* </a> */}
      {/*  </div> */}
    </nav>
  )
}

export default Navbar
