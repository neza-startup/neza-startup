import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faFile, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import banner from '../assets/banner.svg'; */
import icon from '../assets/icon.svg';

import styles from '../styles/LinkInBio.module.css';

function LinkInBio() {
  return (
    <div className={styles.linkInBio}>
      <header>
        {/* <img src={banner} alt="Banner" className={styles.banner} /> */}
        <img src={icon} alt="Icon" className={styles.icon} />
        <h1>The Star Marketing & Software Startup</h1>
      </header>
      <div className={styles.content}>
        {/* <span>#OpenToWork</span> */}
        <a href="https://maps.app.goo.gl/h4DQfpnc3zvRMSuf7" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />&nbsp;Ubicaci&oacute;n
        </a>
        <a href="https://forms.gle/N1qUj644W3iNb6V66" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FontAwesomeIcon icon={faFile} className={styles.icon} />&nbsp;Formulario interesados
        </a>
        <a href="https://calendly.com/neza-startup/meeting" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FontAwesomeIcon icon={faCalendar} className={styles.icon} />&nbsp;Agendar reuni&oacute;n
        </a>
        <a href='https://www.instagram.com/neza.startup/' target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />&nbsp;&#64;neza.startup
        </a>
        <a href='https://www.facebook.com/neza.startup/' target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />&nbsp;&#47;neza.startup
        </a>
        <a href="https://wa.me/527771411554?text=Hola,%20me%20interesan%20sus%20servicios" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />&nbsp;777 141 1554
        </a>
        <a href='https://nezastartup.com' className={styles.link}>
          <FontAwesomeIcon icon={faLink} className={styles.icon} />&nbsp;nezastartup.com
        </a>
        <a href="mailto:contact@nezastartup.com" className={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />&nbsp;contact@nezastartup.com
        </a>
        <a href='https://github.com/neza-startup' className={styles.link}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />&nbsp;github.com/neza-startup
        </a>
      </div>
      <footer>
        <p>&copy; 2025 Neza Startup. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LinkInBio
