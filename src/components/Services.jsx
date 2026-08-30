import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <section className={styles.services} id="services">
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
            <h3>Data Analytics/Intelligence</h3>
          </header>
          <p>We help businesses make sense of their data and turn it into actionable and valuable insights.</p>
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
        <div className={styles.serviceItem}>
          <header>
            <h3>Other Services</h3>
            {/* <p>Explore our full range of services and discover how we can help your business thrive in the digital landscape.</p> */}
          </header>
          <p>Browse our full range of services to find the perfect solution for your business needs.</p>
          {/* <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
          <a href="/form"/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */>Contact us &rarr;{/* Learn More */}</a>

          <a href="/form">View All Services &rarr;</a>
        </div>
        {/* <div className={styles.serviceItem}>
          <header>
            <h3>Cloud and DevOps</h3>
          </header>
          <p>We provide cloud and DevOps services to help businesses streamline their operations and improve their efficiency.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form" */}{/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */}{/* >Contact us */}{/* Learn More */}{/* </a>
        </div> */}
        {/* <div className={styles.serviceItem}>
          <header>
            <h3>Cybersecurity</h3>
          </header>
          <p>We offer cybersecurity services to help businesses protect their data and systems from cyber threats.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form" */}{/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */}{/* >Contact us */}{/* Learn More */}{/* </a>
        </div> */}
        {/* <div className={styles.serviceItem}>
          <header>
            <h3>Networking</h3>
          </header>
          <p>We provide networking services to help businesses establish and maintain reliable and secure network infrastructures.</p>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <a href="/form" */}{/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */}{/* >Contact us */}{/* Learn More */}{/* </a> */}
        {/* </div> */}
      </div>
      {/* <div className={styles.servicesPhases}>
        <h1>Our Services Phases</h1>
        <h2>We follow a structured approach to deliver high-quality services to our clients.</h2>
      </div>
      <div className={styles.servicePhasesList}> */}
      {/* <h3>Phases</h3> */}
      {/* <div className={styles.serviceItem}>
          <header>
            <h3>Consulting</h3>
          </header>
          <p>We assess viability, identify opportunities, recommend services and tools, and provide expert guidance. */}{/* We provide expert consulting services to help businesses navigate challenges and achieve their goals. */}{/* </p> */}
      {/* <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
      {/* </div> */}
      {/* <div className={styles.serviceItem}>
          <header>
            <h3>Design */}{/*  and Development */}{/* </h3>
          </header>
          <p>We create visually appealing and user-friendly designs that help businesses establish a strong brand identity.</p> */}
      {/* <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
      {/* </div> */}
      {/* <div className={styles.serviceItem}>
          <header>
            <h3>Project Management</h3>
          </header>
          <p>We provide comprehensive project management services to ensure that your projects are delivered on time, within budget, and to the highest quality standards.</p> */}
      {/* <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
      {/* <a href="/form" */}{/*"https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */}{/* >Contact us */}{/* Learn More */}{/* </a>
        </div> */}
      {/* <div className={styles.serviceItem}>
          <header>
            <h3>Testing and Quality Assurance</h3>
          </header>
          <p>We offer rigorous testing and quality assurance for reliable, high-performing standard products.</p> */}
      {/* <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
      {/* </div> */}
      {/* <div className={styles.serviceItem}>
          <header>
            <h3>Deployment and Maintenance</h3>
          </header>
          <p>We provide ongoing support and maintenance for our products to ensure they continue to perform at their best.</p> */}
      {/* <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
      {/* <a href="/form" */}{/* "https://www.example.com/web-development" target="_blank" rel="noopener noreferrer" */}{/* >Contact us */}{/* Learn More */}{/* </a>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Services;
