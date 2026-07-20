import logo from '../assets/icon.svg';
import styles from '../styles/BusinessSlider.module.css';

const BusinessSlider = () => {
  return (
    <>
      {/* <header className={styles.header}>
        <h4 className={styles.sliderTitle}>
          Business we have worked with or for:
        </h4>
      </header> */}

      <div className={styles.slider}>
        <div className={styles.sliderTracker}>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
        </div>

        <div aria-hidden="true" className={styles.sliderTracker}>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>

          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 1" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 2" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
          <a href="https://www.nezastartup.com" target='_blank' rel='noopener noreferrer' className={styles.linkImage}>
            <img src={logo} alt="Business Logo 3" className={styles.businessLogo} />
          </a>
        </div>
      </div>
    </>

  );
}

export default BusinessSlider;
