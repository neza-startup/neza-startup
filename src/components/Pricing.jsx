import { /* faArrowDown, faAngleRight */ faChevronDown, faChevronUp, faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const DEFAULT_VISIBLE_FEATURES = 6;

  const pricingPlans = [
    {
      name: "Landing Page",
      price: "Started From $599 USD",
      features: [
        "5w's Strategic Planning",
        "Responsive Design",
        "Mockup Design (UI/UX)",
        "Hosting + Custom Domain",
        "Vanilla, Libraries or Frameworks",
        "Analytics Integration",
        "Contact Form Integration",
        "Social Media Links",
        "Custom Graphics and Images"
      ]
    },
    {
      name: "Mobile Application",
      price: "Started from $1599",
      features: [
        "Mockup Design (UI/UX)",
        "iPhone and/or Android",
        "Native or Cross-Platform",
        "Application Stores Deployment",
        "Responsive Design",
        "Push Notifications",
        "Backend/API Integration",
        "Custom Graphics and Images"
      ]
    },
    {
      name: "Automation Chatbot",
      price: "Started from $999 (or $19/month)",
      features: [
        "Automated Responses",
        "Multi-Platform Integration",
        "Natural Language Processing",
        "Customizable Conversation Flows",
        "Analytics and Reporting",
        "Lead Generation and Qualification",
        "24/7 Availability",
        "Integration with CRM Systems",
        "Personalized User Experience",
        "Multi-Language Support",
        "Real-time Updates",
        "Knowledge Base (custom sources)",
        "Responses restricted to certain topics",
        "AI-Powered Recommendations"
      ]
    },
    {
      name: "Data Dashboard",
      price: "Started from $899",
      features: [
        "Beautiful Data Visualization",
        "Forecasting and Trend analysis",
        "Interactive Dashboards",
        "Advanced Segmentation",
        "Data-Driven Decision-Making",
        "Facts, Metrics and Insights",
        "KPI's and Report Generation",
        "Integration with Data Sources",
        "Real-time Data Updates",
        "Customizable Layouts and Reports",
        "Data Export Options",
        "Integration with Third-party Tools",
        "User Access Control"
      ]
    },
    {
      name: "Content creation",
      price: "Started from $199/month",
      features: [
        "Content Strategy",
        "Copywriting",
        "Graphic Design",
        "Video Production",
        "Photo Editing",
        "Social Media Management",
        "SEO Optimization",
        "Email Marketing",
        "Analytics and Reporting",
        "Content Calendar Planning",
        "Brand Voice and Messaging"
      ]
    },
    {
      name: "Custom service",
      price: "Custom pricing",
      features: [
        "Custom Solutions",
        "Requirement Analysis",
        "Tailored to Your Needs",
        "Flexible Pricing",
        "Accurate pricing based on project scope and requirements",
        "Dedicated Support",
        "Scalable Solutions",
        "Innovative Approaches",
        "Collaborative Process",
        "Results-Oriented"
      ]
    },
    {
      name: "All plans",
      price: "Pricing for all services",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Security Audits",
        "Performance Optimization",
        "Maintenance & Support",
        "Quality Assurance",
        "Technical Consulting"
      ],
      link: "/form",
      cta: "View All plans"
    }
  ];

  const [expandedCards, setExpandedCards] = useState({});

  const toggleFeatures = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={styles.pricing} id="pricing">
      <header className={styles.header}>
        <h1>Pricing and Plans</h1>
        <h2>Stellar value and competitive prices for popular requests</h2>
      </header>

      <div className={styles.pricingContainer}>
        {
          pricingPlans.map((plan, index) => (
            <div key={index} className={styles.pricingCard}>
              <h3>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>
              <ul className={`${styles.features} ${!expandedCards[index] && plan.features.length > DEFAULT_VISIBLE_FEATURES ? styles.fadeBottom : ''}`}>
                {plan.features.slice(0, expandedCards[index] ? plan.features.length : DEFAULT_VISIBLE_FEATURES).map((feature, featureIndex) => (
                  <li key={featureIndex}><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> {feature}</li>
                ))}
              </ul>
              {plan.features.length > DEFAULT_VISIBLE_FEATURES && (
                <button onClick={() => toggleFeatures(index)} className={styles.toggleButton}>
                  {expandedCards[index] ? 'Show Less' : 'Show More'}
                  <FontAwesomeIcon icon={expandedCards[index] ? faChevronUp : faChevronDown} className={styles.toggleIcon} />
                </button>
              )}
              <a href={plan.link || "#contact"} className={styles.ctaButton}>{plan.cta || "Contact us"} {plan.cta ? <>&rarr;</> : null}</a>
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              {
                plan.cta && (
                  <a href="/form" className={styles.ctaButton}>View All Plans &rarr;</a>
                )
              }
            </div>
          ))
        }
      </div>
    </section >
  );
};

export default Pricing;
