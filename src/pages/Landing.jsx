import BusinessSlider from '../components/BusinessSlider.jsx'
import Hero from '../components/Hero.jsx'
import SocialPath from '../components/SocialPath.jsx'
import styles from '../styles/Landing.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
      <SocialPath />
      <Hero />
      <BusinessSlider />
    </div>
  )
}

export default Landing
