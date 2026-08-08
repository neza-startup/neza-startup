import { useState } from "react";
import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        alert("Email added to newsletter successfully!");
        setEmail("");
      } else {
        const errorData = await response.json();
        alert(`Error adding email to newsletter: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding email to newsletter:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section className={styles.newsletter} id="newsletter">
      <header className={styles.newsletterHeader}>
        <h1>Stay update{/* Join Our Newsletter  */}{/* Subscribe to our Newsletter */}</h1>
        <h2>Get our latest {/* promotions,  */}offers, updates and news from us{/* Get the latest updates and offers from Neza Startup. */}{/*  Stay updated with the latest news and offers from Neza Startup. */}</h2>
      </header>

      <div className={styles.newsletterContainer}>
        <div>
          <h3>Newsletter</h3>
          <span>Subscribe to our newsletter</span>
        </div>

        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <fieldset>
            <input type="email" placeholder="nevan.starton@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Subscribe</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
