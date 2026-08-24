import { /* faAngleDown, */ faAngleRight, faBriefcase, faCheck, faClone, faEnvelope, faIdBadge, faMobile, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import icon from '../assets/icon.svg';
import styles from '../styles/Hero.module.css';
const Hero = () => {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  /* const [text, setText] = useState({
    email: '',
    phone: ''
  }); */

  const [copied, setCopied] = useState({
    email: false,
    phone: false
  });

  const handleCopy = (value, key) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(prev => ({ ...prev, [key]: true }));
        setTimeout(() => setCopied(prev => ({ ...prev, [key]: false })), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.addEventListener('click', () => handleCopy('contact@nezastartup.com', 'email'));
    }
    if (phoneRef.current) {
      phoneRef.current.addEventListener('click', () => handleCopy('+52 777 141 1554', 'phone'));
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <img src={icon} alt="Neza Startup Logo" className={styles.icon} />
      <h1>Neza Startup</h1>
      <h2>The Star Marketing & Software Startup</h2>
      <div className={styles.ctaContainer}>
        <a href="#services"/* "#contact" */ className={styles.cta}>View services <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /> </a>
        <a href="#contact" className={styles.ctaAux}>Contact us <FontAwesomeIcon icon={faStar} /></a>
      </div>
      <div className={styles.servicesContainer}>
        {/* <header className={styles.header}>
          <h3 className={styles.topSkillsHeading}><FontAwesomeIcon icon={faStar} className={styles.icon} />Services</h3>
          <a href="https://www.linkedin.com/services/page/94049531a961b25782/" target="_blank" rel="noopener noreferrer" className={styles.link}> */}
        {/* {t("HonorsAndAwards.btn")} */}
        {/* </a>
        </header> */}
        {/* <p>Details about services will go here.</p> */}
        <ul className={styles.serviceList}>
          {/* <li className={styles.serviceItem}>
            Software Development */}
          {/* <h4 className={styles.serviceTitle}>Web Development</h4>
          <p className={styles.serviceDescription}>Building responsive and dynamic websites using modern technologies like React, Node.js, and more.</p> */}
          {/* </li> */}
          <li className={styles.serviceItem}>
            Web Development
            {/* <h4 className={styles.serviceTitle}>Web Development</h4>
          <p className={styles.serviceDescription}>Building responsive and dynamic websites using modern technologies like React, Node.js, and more.</p> */}
          </li>
          {/* <li className={styles.serviceItem}>
            Business Analytics
          </li> */}
          {/* <li className={styles.serviceItem}>
            Graphic Design */}
          {/* <h4 className={styles.serviceTitle}>UI/UX Design</h4>
          <p className={styles.serviceDescription}>Designing intuitive user interfaces and engaging user experiences for web and mobile applications.</p> */}
          {/* </li> */}
          {/* <li className={styles.serviceItem}>
          Mobile Application Development */}
          {/* <h4 className={styles.serviceTitle}> App Development</h4>
          <p className={styles.serviceDescription}>Creating user-friendly mobile applications for both Android and iOS platforms.</p> */}
          {/* </li> */}
          <li className={styles.serviceItem}>
            Content Creation
            {/*  <h4 className={styles.serviceTitle}>Backend Development</h4>
          <p className={styles.serviceDescription}>Creating robust backend systems with Express.js, databases, and RESTful APIs.</p> */}
          </li>
          {/* <li className={styles.serviceItem}>
          <h4 className={styles.serviceTitle}>Consulting</h4>
          <p className={styles.serviceDescription}>Providing expert advice on web technologies, architecture, and best practices.</p>
        </li> */}
        </ul>
      </div>
      <div className={styles.ratingContainer}>
        <span className={styles.rating}>4.5/5{/*  Customer Satisfaction */}</span>
        <span className={styles.reviews}> (10 reviews)</span>
        <span className={styles.stars}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>

      <div className={styles.contactInfo}>

        <div className={styles.phone} /* onClick={() => window.open("tel:+527771411554", "_self")} */>
          <FontAwesomeIcon icon={faMobile} className={styles.icon} />

          <a href="tel:+527771411554" ref={phoneRef}>
            +52 777 444 7232 &#8599;
          </a>

          {
            copied.phone ?
              <FontAwesomeIcon icon={faCheck} className={styles.copiedIcon} /> :
              <FontAwesomeIcon icon={faClone} className={styles.copyIcon} onClick={() => handleCopy('+52 777 444 7232', 'phone')} />
          }
        </div>

        <div className={styles.email}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a href="mailto:contact@nezastartup.com" ref={emailRef}>
            contact@nezastartup.com &#8599;
          </a>

          {
            copied.email ?
              <FontAwesomeIcon icon={faCheck} className={styles.copiedIcon} /> :
              <FontAwesomeIcon icon={faClone} className={styles.copyIcon} onClick={() => handleCopy('contact@nezastartup.com', 'email')} />
          }
        </div>
      </div>

      {/* <div className={styles.testimonial}>
        <p>"Neza Startup transformed our online presence and boosted our sales!"</p>
        <span>- Happy Client</span>
      </div>*/}
      {/* <p>We help businesses grow with innovative marketing and software solutions.</p> */}
      {/* <div className={styles.scrollIndicator}>
        <span>Scroll down</span>
        <FontAwesomeIcon icon={faAngleDown} className={styles.scrollIcon} />
      </div> */}
      {/*  <a href="#contact" className={styles.cta}>
        View services <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
      </a>
      <a href="#contact" className={styles.ctaAux}>
        Contact us
      </a> */}
      <div className={styles.workStatusContainer}>
        <span className={styles.workStatus}>#OpenForBusiness <FontAwesomeIcon icon={faBriefcase} /></span>
        <span className={styles.workStatus}>#WeAreHiring <FontAwesomeIcon icon={faIdBadge} /></span>
      </div>
    </section>
  )
}

export default Hero
