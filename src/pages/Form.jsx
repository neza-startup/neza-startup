import { useRef, useState } from 'react';
import styles from '../styles/Form.module.css';

function Form() {

  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    type: 'individuals',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: 'Up to 1 month',
    link: '',
    channel: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          type: '',
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          budget: '',
          timeline: '',
          link: '',
          comments: ''
        });
      } else {
        const errorData = await response.json();
        alert(`Error submitting form: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section className={styles.formContainer}>
      <header>
        <h1>Neza Startup - Request Services Form</h1>
        <h2>The Star Marketing & Software Startup</h2>
        <hr />
        <p>Hello there! Thanks a lot for your interest. Please fill out our very short form carefully so we can understand better your needs and offer the most tailored solution for you, this help us prepare before our first meeting. If you have any questions while filling it out, feel free to contact us. It takes less than 5 minutes to complete!</p>
      </header>

      <hr />

      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <fieldset>

          <legend>Contact Information</legend>

          <label htmlFor="type">Type:</label>
          <select id="type" name="type" required value={formData.type} onChange={handleChange}>
            <option value="individuals" selected>Individuals</option>
            <option value="business">Business</option>
          </select>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder='John Appleseed' />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder='johnappleseed@example.com' />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder='+52 123 456 7890' />
        </fieldset>

        <fieldset>
          <legend>Project Details</legend>

          <label htmlFor="subject">Name:</label>
          <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} placeholder='e.g., Star project' />

          <label htmlFor='interest'>Primary Interest (optional):</label>
          <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
            <optgroup label="Software">
              <option value="">-- Select an option --</option>
              <option value="software">Landing Page</option>
              <option value="software">E-commerce</option>
              <option value="software">Web Application</option>
              <option value="software">Dashboard</option>
              <option value="software">Mobile Application</option>
            </optgroup>
            <optgroup label="Marketing">
              <option value="marketing">Marketing Strategy</option>
              <option value="marketing">Social Media Management</option>
              <option value="marketing">Content Creation</option>
              <option value="marketing">Branding</option>
              <option value="marketing">Advertising</option>
            </optgroup>
            <optgroup label="Both">
              <option value="both">Software & Marketing</option>
            </optgroup>
          </select>

          <label htmlFor="message">Description:</label>
          <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} placeholder='Describe your project in detail...'></textarea>
        </fieldset>

        <fieldset>
          <legend>Additional Information</legend>

          <label htmlFor="budget">Budget (optional):</label>
          <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder='e.g., $10,000 MXN' />

          <label htmlFor="timeline">Timeline:</label>
          <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required>
            <option value="Up to 1 month">Up to 1 month</option>
            <option value="Between 1 and 3 months">Between 1 and 3 months</option>
            <option value="From 3 to 6 months">From 3 to 6 months</option>
            <option value="Around 6 to 12 months">Around 6 to 12 months</option>
            <option value="Over 1 year">Over 1 year</option>
          </select>
          {/* <input type="text" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} placeholder='e.g., 3 months' /> */}

          <label htmlFor="link">Link (optional):</label>
          <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} placeholder='e.g., https://example.com' />

          <label htmlFor="channel">How did you hear about us? (optional):</label>
          <select id="channel" name="channel" value={formData.channel} onChange={handleChange}>
            <option value="">-- Select an option --</option>
            <option value="social_media">Social Media</option>
            <option value="referral">Referral</option>
            <option value="search_engine">Search Engine</option>
            {/* <option value="advertisement">Advertising (e.g., billboards, posters, or screens)</option> */}
            <option value="other">Other</option>
          </select>

          <label htmlFor="comments">Comments(optional):</label>
          <textarea id="comments" name="comments" rows="3" value={formData.comments} onChange={handleChange}></textarea>

          {/* <p>We understand that budget and timeline can vary, so feel free to provide any information you have. This will help us better understand your needs and provide a more accurate proposal.</p> */}
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

        <hr />

        <span>Almost there, you are one click away from turning your project into a reality!</span>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
