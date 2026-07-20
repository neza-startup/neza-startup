import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/SocialPath.module.css';

const SocialPath = () => {
  return (
    <div className={styles.socialPath}>
      <a href="https://wa.me/527771411554" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/neza.startup/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>
      <a href="https://www.facebook.com/neza.startup" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
      </a>
      <a href="mailto:contact@nezastartup.com" className={styles.socialLink}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
      <a href="tel:+527771411554" className={styles.socialLink}>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
      </a>
      <a href="https://calendly.com/neza-startup/meeting" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
      </a>
      <a href="https://github.com/neza-startup" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialPath;
