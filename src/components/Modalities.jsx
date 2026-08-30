import { faBolt, faLaptop, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Modalities.module.css';

const Modalities = () => {
  return (
    <section className={styles.modalities} id="modalities">

      <div className={styles.servicesModalities}>
        <h1>Our {/* Services  */}Modalities</h1>
        <h2>Find the modality that works best for you{/* We offer our services in various modalities to cater to the unique needs of our clients. */}</h2>
        <div className={styles.servicesModalitiesContainer}>
          <div className={styles.servicesModalitiesContent}>
            <span className={styles.serviceModality}>On-site <FontAwesomeIcon icon={faLocationDot} /></span>
            <p>Face-to-face interaction with our team</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.servicesModalitiesContent}>
            <span className={styles.serviceModality}>Remote <FontAwesomeIcon icon={faLaptop} /></span>
            <p>Collaborate with our team remotely, through virtual meetings and platforms</p>
          </div>
          <hr className={styles.divider} />
          {/* <span className={styles.serviceModality}>Virtual <FontAwesomeIcon icon={faLaptop} /></span>
          <p>Collaborate with our team through virtual meetings and online platforms</p>
          <hr className={styles.divider} /> */}
          <div className={styles.servicesModalitiesContent}>
            <span className={styles.serviceModality}>Hybrid <FontAwesomeIcon icon={faBolt} /></span>
            <p>Combine on-site and remote work for maximum flexibility</p>
          </div>
        </div>

        {/* <ul>
          <li>Consulting</li>
          <li>Project Management</li>
          <li>Design and Development</li>
          <li>Testing and Quality Assurance</li>
          <li>Deployment and Maintenance</li>
        </ul> */}
      </div>
      <div className={styles.contactSection}>
        <h3>Interested in our services?</h3>
        <p>Acquire the {/* right  */}services you need to grow your business.</p>
        <a href="/form"/* "https://www.example.com/contact" target="_blank" rel="noopener noreferrer" */>Contact Us{/* Get in Touch */}</a>
      </div>
    </section>
  )
};

export default Modalities;
