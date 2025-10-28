import icon from '../assets/icon.svg'
import styles from '../styles/Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={icon} alt="Neza Startup Logo" className={styles.icon} />
      <p>Próximamente...¡Estamos trabajando en el desarrollo del sitio web oficial!</p>
      <p>&#40;conforme el emprendimiento avance&#47;crezca&#41;</p>
      <span>- Neza Team</span>
    </section>
  )
}

export default Hero
