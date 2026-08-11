import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Form.module.css';

function Form() {

  const formRef = useRef(null);
  /* const [isCheckedSendNotification, setIsCheckedSendNotification] = useState(true); */
  const [formData, setFormData] = useState({
    type: 'individuals',
    name: '',
    email: '',
    phone: '',
    subject: '',
    interest: '',
    message: '',
    budget: '',
    timeline: 'up_to_1_month',
    link: '',
    channel: '',
    comments: '',
    notify: true
  });

  const [tabs, setTabs] = useState([
    { id: 1, name: 'request', active: true },
    { id: 2, name: 'review', active: false }
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  /* const toggleSendNotification = () => {
    setIsCheckedSendNotification(prevState => !prevState);
    setFormData(prevData => ({
      ...prevData,
      notify: !prevData.notify
    }));
  } */

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
          type: 'individuals',
          name: '',
          email: '',
          phone: '',
          subject: '',
          interest: '',
          message: '',
          budget: '',
          timeline: 'up_to_1_month',
          link: '',
          channel: '',
          comments: '',
          notify: true
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

  const setActiveTabFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const tabName = params.get("tab") || "request"; // Default to "Request" if no tab parameter is found

    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === tabName,
      }))
    );
  };

  // Call setActiveTabFromURL when the component mounts
  /* useState(() => {
    setActiveTabFromURL();
  }, []); */

  /* on mount read URL plus listen back forward */
  useEffect(() => {
    setActiveTabFromURL();

    window.addEventListener("popstate", setActiveTabFromURL);

    return () => {
      window.removeEventListener("popstate", setActiveTabFromURL);
    };
  }, []);

  /* when the tabs state changes, update the URL to reflect the active tab */
  useEffect(() => {
    /* const activeTab = tabs.find(tab => tab.active);
    if (activeTab) {
      const params = new URLSearchParams(window.location.search);
      params.set("tab", activeTab.name);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    } */

    const activeTab = tabs.find((tab) => tab.active);
    if (!activeTab) return;

    const params = new URLSearchParams(window.location.search);
    const currentTab = params.get("tab");

    if (currentTab !== activeTab.name) {
      window.history.pushState(null, "", `?tab=${activeTab.name}`);
    }
  }, [tabs]);

  /*  handle tab switching */
  const handleTabClick = (tabId) => {
    setTabs(prevTabs => prevTabs.map(tab => ({
      ...tab,
      active: tab.id === tabId
    })));
  }

  return (
    <section className={styles.formContainer}>
      <header>
        <h1>Neza Startup - Request Services Form</h1>
        <h2>The Star Marketing & Software Startup</h2>
        <hr />
        <p>

          Thank you for your interest, please fill out this short form (it takes less than 5 minutes to complete!). If you have any questions while filling it out, feel free to contact us.

          {/* Thank you for being interested in our services.

          Please fill out our short form carefully so we can understand better your needs and offer the most tailored solution for you.

          this help us prepare before our first meeting. If you have any questions while filling it out, feel free to contact us.

          It takes less than 5 minutes to complete! */}</p>
      </header>

      <a href="/" /* target="_blank" */ rel="noopener noreferrer" className={styles.navbarLink}>
        &#8592; Back to landing page
      </a>

      <div className={styles.switchTab}>
        {
          tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${tab.active ? styles.active : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.name}
            </button>
          ))
        }
      </div>

      {/* <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${formData.type === 'individuals' ? styles.active : ''}`}
          onClick={() => setFormData(prevData => ({ ...prevData, type: 'individuals' }))}
        >
          Individuals
        </button>
        <button
          className={`${styles.tab} ${formData.type === 'business' ? styles.active : ''}`}
          onClick={() => setFormData(prevData => ({ ...prevData, type: 'business' }))}
        >
          Business
        </button>
      </div>

      <hr /> */}

      {/* tabs.find(tab => tab.id === activeTab)?.content */}
      <div className={styles.content}>
        {
          tabs.find(tab => tab.active).name === 'request' && (
            <p>We are excited to learn more about your project! Please fill out the form below with as much detail as possible. This will help us understand your needs and provide you with the best possible service.</p>
          )
        }
        {
          tabs.find(tab => tab.active).name === 'review' && (
            <p>We are thrilled to have you here! Please fill out the form below with your information and project details. We will review your submission and get back to you as soon as possible.</p>
          )
        }
      </div>

      <hr />

      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <fieldset>

          <legend>Contact Information</legend>

          <label htmlFor="type">Type:</label>
          <select id="type" name="type" required value={formData.type} onChange={handleChange}>
            <option value="individuals">Individuals</option>
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
            <option value="up_to_1_month">Up to 1 month</option>
            <option value="between_1_and_3_months">Between 1 and 3 months</option>
            <option value="from_3_to_6_months">From 3 to 6 months</option>
            <option value="around_6_to_12_months">Around 6 to 12 months</option>
            <option value="over_1_year">Over 1 year</option>
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
            <option value="contacted_by_us">Contacted by us</option>
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

        <fieldset className={styles.fieldset}>
          <label htmlFor="notify" className={styles.statusLabelName}>Send me a copy to my email and phone:&nbsp;
            <input type="checkbox" id="notify" name="notify" onChange={handleChange} checked={formData.notify} className={styles.statusCheckbox} />
            <label htmlFor="notify" className={styles.statusLabel}></label>
            <label className={styles.statusLabelText/*  styles.checkboxLabel */}>&nbsp;{formData.notify ? '(Yes)' : '(No)'} </label>
          </label>
        </fieldset>

        <div className={styles.formActions}>
          <span className={styles.disclaimer}>By submit you are agree with our Terms and Conditions&#8599; and our Privacy Policy&#8599;.</span>

          <button type="submit">Submit</button>
        </div>

      </form>
    </section>
  );
}

export default Form;
