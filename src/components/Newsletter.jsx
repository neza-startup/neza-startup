import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <header className={styles.newsletterHeader}>
        <h1>Stay update{/* Join Our Newsletter  */}{/* Subscribe to our Newsletter */}</h1>
        <h2>Get our latest {/* promotions,  */}offers, updates and news from us{/* Get the latest updates and offers from Neza Startup. */}{/*  Stay updated with the latest news and offers from Neza Startup. */}</h2>
      </header>

      <div className={styles.newsletterContent}>
        <div>
          <h3>Newsletter</h3>
          <span>Subscribe to our newsletter</span>
        </div>

        <form className={styles.newsletterForm}>
          <fieldset>
            <input type="email" placeholder="nevan.starton@example.com" required />
            <button type="submit">Subscribe</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
