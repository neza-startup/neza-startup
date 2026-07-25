import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <header>
        <h1>Contact Us</h1>
        <h2>We'd love to hear from you!</h2>
      </header>
      <p>
        If you have any questions, inquiries, or would like to discuss a potential project, please feel free to reach out to us. You can contact us through the following methods:
      </p>
      <ul>
        <li>Email: <a href="mailto:info@neza.com">info@neza.com</a></li>
        <li>Phone: <a href="tel:+1234567890">+1 (234) 567-8900</a></li>
        <li>Address: 123 Main Street, Anytown, USA</li>
      </ul>
    </section>
  );
};

export default Contact;
