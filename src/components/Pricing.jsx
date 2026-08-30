import { faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <header className={styles.header}>
        <h1>Pricing</h1>
        <h2>Stellar value and competitive prices for popular requests</h2>
      </header>

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
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
        </div>

        <div className={styles.pricingCard}>
          <h3>Mobile Application</h3>
          <p className={styles.price}>Started from $1599/month</p>
          <ul className={styles.features}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Mockup Design (UI/UX)</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> iPhone and/or Android</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Native or Cross-Platform</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Application Stores Deployment</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Responsive Design</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Push Notifications</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Backend/API Integration</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Custom Graphics and Images</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
        </div>

        <div className={styles.pricingCard}>
          <h3>Automation Chatbot</h3>
          <p className={styles.price}>Started from $999/month</p>
          <ul className={styles.features}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Automated Responses</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Multi-Platform Integration</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Natural Language Processing</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Customizable Conversation Flows</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Analytics and Reporting</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Lead Generation and Qualification</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> 24/7 Availability</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Integration with CRM Systems</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Personalized User Experience</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Multi-Language Support</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Real-time Updates</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Knowledge Base (custom sources)</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Responses restricted to certain topics</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> AI-Powered Recommendations</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
        </div>

        <div className={styles.pricingCard}>
          <h3>Data Dashboard</h3>
          <p className={styles.price}>Started from $899</p>
          <ul className={styles.features}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Beautiful Data Visualization</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Forecasting and Trend analysis</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Interactive Dashboards</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Advanced Segmentation</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Data-Driven Decision-Making</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Facts, Metrics and Insights</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> KPI's and Report Generation</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Integration with Data Sources</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Real-time Data Updates</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Customizable Layouts and Reports</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Data Export Options</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Integration with Third-party Tools</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> User Access Control</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
        </div>

        <div className={styles.pricingCard}>
          <h3>Content creation</h3>
          <p className={styles.price}>Started from $199/month</p>
          <ul className={styles.features}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Content Strategy</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Copywriting</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Graphic Design</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Video Production</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Photo Editing</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Social Media Management</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> SEO Optimization</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Email Marketing</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Analytics and Reporting</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Content Calendar Planning</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Brand Voice and Messaging</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
        </div>

        <div className={styles.pricingCard}>
          <h3>Custom service</h3>
          <p className={styles.price}>Custom pricing</p>
          <ul className={styles.features}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Custom Solutions</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />  Requirement Analysis</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Tailored to Your Needs</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Flexible Pricing</li>
            <li ><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />  Accurate pricing based on project scope and requirements</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Dedicated Support</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Scalable Solutions</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Innovative Approaches</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Collaborative Process</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Results-Oriented</li>
          </ul>
          <a href="/form" className={styles.ctaButton}>Contact us</a>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
