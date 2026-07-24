import BusinessSlider from '../components/BusinessSlider.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import QnA from '../components/Q&A.jsx'
import SocialPath from '../components/SocialPath.jsx'
import styles from '../styles/Landing.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
      <SocialPath />
      <Navbar />
      <Hero />
      <BusinessSlider />
      <QnA />
      <Footer />
    </div>
  )
}

export default Landing
