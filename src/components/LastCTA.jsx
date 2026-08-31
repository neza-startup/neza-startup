import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/LastCTA.module.css";

const LastCTA = () => {
  return (
    <section className={styles.lastCTA} id='lastcta'>
      <header className={styles.lastCTAHeader}>
        <h1>Ready to get started?</h1>
        <h2>Start your star project today{/* Contact us today and let's discuss how we can help you achieve your goals. */}</h2>
      </header>

      <div className={styles.lastCTAContainer}>
        {/* <a href="/services" className={styles.servicesButton}>Explore Our Services</a> */}
        <a href="#contact" className={styles.contactButton}>Contact Us Now<FontAwesomeIcon icon={faAngleRight} className={styles.icon} /></a>
        <a href="/form" className={styles.servicesButton}>Get custom price <FontAwesomeIcon icon={faStar} /></a>
      </div>
    </section>
  );
};

export default LastCTA;
