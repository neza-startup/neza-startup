import Hero from '../components/Hero.jsx'
import SocialPath from '../components/SocialPath.jsx'
import styles from '../styles/Landing.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
      <SocialPath />
      <Hero />
    </div>
  )
}

export default Landing
