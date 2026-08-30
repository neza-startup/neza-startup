import { faBolt, faCalendarDays, faCircleCheck, faLaptop, /*  faDiamond, faGem, faWandMagicSparkles, faArrowsRotate, */ faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Modalities.module.css';

const Modalities = () => {
  return (
    <section className={styles.modalities} id="modalities">

      <div className={styles.servicesModalities}>
        <h1>Our {/* Services  */}Models and Modalities</h1>
        <h2>Find the right model and modality that works best for you{/* We offer our services in various modalities to cater to the unique needs of our clients. */}</h2>
        <div className={styles.servicesModalitiesContainer}>
          <div className={styles.billingPlan}>
            <h3>Billing Models</h3>
            {/* <div className={styles.billingModels}> */}
            <div className={styles.servicesModalitiesContent}>
              <span className={styles.serviceModality}>One-Time <FontAwesomeIcon icon={faCircleCheck} /></span>
              <p>Complete a project in only one exhibition</p>
            </div>
            {/* <hr className={styles.divider} /> */}
            <div className={styles.servicesModalitiesContent}>
              <span className={styles.serviceModality}>On-Demand <FontAwesomeIcon icon={faStar} /></span>
              <p>Get services as needed, without any predefined commitment but agreement{/* recurrent */}</p>
            </div>
            {/* <hr className={styles.divider} /> */}
            <div className={styles.servicesModalitiesContent}>
              <span className={styles.serviceModality}>{/* Monthly  */}Subscription <FontAwesomeIcon icon={faCalendarDays} /></span>
              <p>{/* Receive services on a monthly basis with a fixed fee */}Services delivered weekly, bi-weekly, or monthly for a fixed fee{/* Services provided on a defined weekly, bi-weekly, or monthly basis. */}{/* recurrent and planned/scheduled */}</p>
            </div>
            {/* </div> */}
          </div>
          <hr className={styles.verticalDivider} />
          <div className={styles.serviceModalities}>
            <h3>Service Modalities</h3>
            <div className={styles.servicesModalitiesContent}>
              <span className={styles.serviceModality}>On-site <FontAwesomeIcon icon={faLocationDot} /></span>
              <p>Face-to-face interaction with our team</p>
            </div>
            {/* <hr className={styles.divider} /> */}
            <div className={styles.servicesModalitiesContent}>
              <span className={styles.serviceModality}>Remote <FontAwesomeIcon icon={faLaptop} /></span>
              <p>Collaborate with our team remotely, through virtual meetings and platforms</p>
            </div>
            {/* <hr className={styles.divider} /> */}
            {/* <span className={styles.serviceModality}>Virtual <FontAwesomeIcon icon={faLaptop} /></span>
          <p>Collaborate with our team through virtual meetings and online platforms</p>
          <hr className={styles.divider} /> */}
            <div className={styles.servicesModalitiesContent}>
              <span className={styles.serviceModality}>Hybrid <FontAwesomeIcon icon={faBolt} /></span>
              <p>Combine on-site and remote work for maximum flexibility</p>
            </div>
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
