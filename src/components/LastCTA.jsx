import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/LastCTA.module.css";

const LastCTA = () => {

  const isArticlePage = useLocation().pathname.startsWith('/article/');
  const navigate = useNavigate();

  const handleContactClick = (event) => {
    if (!isArticlePage) return;

    event.preventDefault();
    navigate('/#contact');

    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className={styles.lastCTA} id='lastcta'>
      <header className={styles.lastCTAHeader}>
        <h1>Ready to get started?</h1>
        <h2>Start your star project today{/* Contact us today and let's discuss how we can help you achieve your goals. */}</h2>
      </header>

      <div className={styles.lastCTAContainer}>
        {/* <a href="/services" className={styles.servicesButton}>Explore Our Services</a> */}
        {isArticlePage ? (
          <Link to="/#contact" className={styles.contactButton} onClick={handleContactClick}>
            Contact Us Now
            <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
          </Link>
        ) : (
          <a href="/#contact" className={styles.contactButton}>
            Contact Us Now
            <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
          </a>
        )}
        <Link to="/form" className={styles.servicesButton}>Get custom price <FontAwesomeIcon icon={faStar} /></Link>
      </div>
    </section>
  );
};

export default LastCTA;
