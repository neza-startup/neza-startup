import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <h1>Pricing</h1>
      <h2>Stellar value and competitive prices for popular requests</h2>

      <div className={styles.pricingContainer}>
        <div className={styles.pricingCard}>
          <h3>Landing Page</h3>
          <p className={styles.price}>Started From $599 USD</p>
          <ul className={styles.features}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> 5w's Strategic Planning</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Responsive Design</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Mockup Design (UI/UX)</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Hosting + Custom Domain</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Vanilla, Libraries or Frameworks</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Analytics Integration</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Contact Form Integration</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Social Media Links</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Custom Graphics and Images</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
        </div>

        <div className={styles.pricingCard}>
          <h3>Mobile Application</h3>
          <p className={styles.price}>Started from $1099/month</p>
          <ul className={styles.features}>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
        </div>

        <div className={styles.pricingCard}>
          <h3>Automation Chatbot</h3>
          <p className={styles.price}>Started from $999/month</p>
          <ul className={styles.features}>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
        </div>

        <div className={styles.pricingCard}>
          <h3>Data Dashboard</h3>
          <p className={styles.price}>Started from $899</p>
          <ul className={styles.features}>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
        </div>

        <div className={styles.pricingCard}>
          <h3>Content creation</h3>
          <p className={styles.price}>Started from $199/month</p>
          <ul className={styles.features}>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
        </div>

        <div className={styles.pricingCard}>
          <h3>Custom service</h3>
          <p className={styles.price}>Custom pricing</p>
          <ul className={styles.features}>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
