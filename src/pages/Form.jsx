import styles from '../styles/Form.module.css';

function Form() {
  return (
    <section className={styles.formContainer}>
      <header>
        <h1>Neza Startup - Request Services Form</h1>
        <h2>The Star Marketing & Software Startup</h2>
        <p>Hello there! Thanks a lot for your interest. Please fill out our very short form carefully so we can understand better your needs and offer the most tailored solution for you, this help us prepare before our first meeting. If you have any questions while filling it out, feel free to contact us. It takes less than 5 minutes to complete!</p>
      </header>
      <form action="/api/contact" method="POST">
        <fieldset>

          <legend>Contact Information</legend>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </fieldset>

        <fieldset>
          <legend>Project Details</legend>

          <label htmlFor="subject">Name:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Description:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </fieldset>

        <fieldset>
          <legend>Additional Information</legend>

          <label htmlFor="budget">Budget (optional):</label>
          <input type="text" id="budget" name="budget" />

          <label htmlFor="timeline">Timeline (optional):</label>
          <input type="text" id="timeline" name="timeline" />
        </fieldset>

        {/* <fieldset>
          <legend>How did you hear about us? (optional)</legend>

          <label htmlFor="referral">Referral:</label>
          <input type="text" id="referral" name="referral" />
        </fieldset> */}

        {/* <fieldset>
          <legend>Additional Comments (optional)</legend>

          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="3"></textarea>
        </fieldset> */}

        {/* <fieldset>
          <legend>Privacy and Consent</legend>

          <label htmlFor="consent">
            <input type="checkbox" id="consent" name="consent" required />
            I consent to having this website store my submitted information so they can respond to my inquiry.
          </label>
        </fieldset> */}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
