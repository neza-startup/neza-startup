import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../assets/icon.svg';
import styles from '../styles/Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={icon} alt="Neza Startup Logo" className={styles.icon} />
      <h1>Neza Startup</h1>
      <h2>The Star Marketing & Software Startup</h2>
      <div className={styles.ctaContainer}>
        <a href="#contact" className={styles.cta}>View services <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /> </a>
        <a href="#contact" className={styles.ctaAux}>Contact us</a>
      </div>
    </section>
  )
}

export default Hero
