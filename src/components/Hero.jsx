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
    <section className={styles.hero}>
      <img src={icon} alt="Neza Startup Logo" className={styles.icon} />
      <h1>Neza Startup</h1>
      <h2>The Star Marketing & Software Startup</h2>
      <div className={styles.ctaContainer}>
        <a href="https://drive.google.com/file/d/1bE1chIYiese2pCK1QOwGCmaivCRo6kPy/view?usp=sharing"/* "#contact" */ className={styles.cta}>View services <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /> </a>
        <a href="/link-in-bio" className={styles.ctaAux}>Contact us <FontAwesomeIcon icon={faStar} /></a>
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
