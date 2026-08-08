import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faFile, faLink, faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SocialPath.module.css';

const SocialPath = () => {
  const handleShare = () => {
    const shareData = {
      title: 'Neza Startup',
      text: 'Check out Neza Startup!',
      url: 'https://www.nezastartup.com',
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className={styles.socialPath}>
      <a href="https://www.nezastartup.com/link-in-bio" target="_self" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
      </a>
      <a href="https://wa.me/527774447232" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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
      <a href="tel:+527774447232" className={styles.socialLink}>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
      </a>
      <a href="https://calendly.com/neza-startup/meeting" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
      </a>
      <a href="https://github.com/neza-startup" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href="/form" /* target="_blank" */ rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faFile} className={styles.icon} />
      </a>
      <span onClick={handleShare} className={styles.socialLink}>
        <FontAwesomeIcon icon={faShare} className={styles.icon} />
      </span>
    </div>
  );
};

export default SocialPath;
