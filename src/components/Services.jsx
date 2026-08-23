import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <header className={styles.header}>
        <h1>Our Services</h1>
        <h2>Starring our creative and digital solutions</h2>
      </header>
      <div className={styles.servicesContainer}>
        <h3 className={styles.serviceCategory}>
          <span>Software</span>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
        </h3>
        <hr className={styles.divider} />
        <h3 className={styles.serviceCategory}>
          <span>Marketing</span>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
        </h3>
      </div>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <header>
            <h3>Web Development</h3>
          </header>
          <p>We create responsive and user-friendly websites that help businesses establish a strong online presence.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form"/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */>Contact us{/* Learn More */}</a>
        </div>
        <div className={styles.serviceItem}>
          <header>
            <h3>Mobile App Development</h3>
          </header>
          <p>We develop mobile applications for iOS and Android platforms, providing seamless user experiences.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form"/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */>Contact us{/* Learn More */}</a>
        </div>
        <div className={styles.serviceItem}>
          <header>
            <h3>AI Solutions</h3>
          </header>
          <p>We provide cutting-edge AI solutions to help businesses automate processes and gain valuable insights from their data.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form"/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */>Contact us{/* Learn More */}</a>
        </div>
        <div className={styles.serviceItem}>
          <header>
            <h3>Data Analytics</h3>
          </header>
          <p>We help businesses make sense of their data and turn it into actionable insights.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form"/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */>Contact us{/* Learn More */}</a>
        </div>
        <div className={styles.serviceItem}>
          <header>
            <h3>Digital Marketing</h3>
          </header>
          <p>We offer digital marketing services to help businesses reach their target audience and grow their brand.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form"/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */>Contact us{/* Learn More */}</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
