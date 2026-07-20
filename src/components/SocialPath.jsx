import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/SocialPath.module.css';

const SocialPath = () => {
  return (
    <div className={styles.socialPath}>
      <a href="https://wa.me/527771411554" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.instagram.com/neza.startup/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.facebook.com/nezastartup" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="mailto:example@email.com" className={styles.socialLink}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="tel:+527771411554" className={styles.socialLink}>
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </div>
  );
};

export default SocialPath;
