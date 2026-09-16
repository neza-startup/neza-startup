import BusinessSlider from '../components/BusinessSlider.jsx'
import Contact from '../components/Contact.jsx'
import Hero from '../components/Hero.jsx'
import LastCTA from '../components/LastCTA.jsx'
import Modalities from '../components/Modalities.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Pricing from '../components/Pricing.jsx'
import Product from '../components/Products.jsx'
import QnA from '../components/Q&A.jsx'
import Services from '../components/Services.jsx'
import SocialPath from '../components/SocialPath.jsx'
import styles from '../styles/Landing.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
      <SocialPath />
      <Hero />
      <BusinessSlider />
      <Services />
      <Pricing />
      <Modalities />
      <Product />
      <Contact />
      <QnA />
      <Newsletter />
      <LastCTA />
    </div>
  )
}

export default Landing
