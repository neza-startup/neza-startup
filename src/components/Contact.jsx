import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faFile, faLink, faPaperPlane, faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import Modal from "./Modal";

const Contact = () => {

  const formRef = useRef(null);
  const modalRef = useRef(null);
  const [isWhatsAppActive, setIsWhatsAppActive] = useState(false);
  const [isCheckedDesktopEmail, setIsCheckedDesktopEmail] = useState(false);
  const [isCheckedWhatsappLink, setIsCheckedWhatsappLink] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    subject: 'Requesting services',
    name: '',
    email: '',
    phone: '',
    message: 'Hello! I am interested in your services.'
  });

  const toggleStatus = () => {
    setIsWhatsAppActive(!isWhatsAppActive);
  }

  const toggleCheckbox = () => {
    setIsCheckedDesktopEmail(!isCheckedDesktopEmail);
  }

  const toggleChecked = () => {
    setIsCheckedWhatsappLink(!isCheckedWhatsappLink);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  useEffect(() => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  }, [formData, isWhatsAppActive, isCheckedDesktopEmail, isCheckedWhatsappLink]);

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true);

    const { subject, name, email, phone, message } = formData;

    if (isWhatsAppActive) {
      const whatsappMessage = `Hello, I would like to get in touch with you. My name is ${name}, and my email is ${email}. My phone number is ${phone}. I would like to discuss the following subject: ${subject}. Here is my message: ${message}`;
      const whatsappURL = `https://wa.me/+527774447232?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, '_blank');
    } else if (isCheckedDesktopEmail) {
      const emailBody = `Hello, I would like to get in touch with you. My name is ${name}, and my email is ${email}. My phone number is ${phone}. I would like to discuss the following subject: ${subject}. Here is my message: ${message}`;
      const mailtoLink = `mailto:contact@nezastartup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      window.open(mailtoLink, '_blank');
    } else {
      const sendEmailAndWhatsApp = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            /* alert('Email sent successfully!'); */
            /* formRef.current.reset(); */

            modalRef.current.open('Email sent successfully!', 'Your email has been sent successfully. We will get back to you shortly.', 'Close');

            setFormData({
              subject: 'Requesting services',
              name: '',
              email: '',
              phone: '',
              message: 'Hello! I am interested in your services.'
            });

            /* Close modal automatically after 3 seconds */
            setTimeout(() => {
              modalRef.current.close();
            }, 3000);

          }/*  else {
            alert('Error sending email. Please try again later.');
          } */
        } catch (error) {
          alert(error);
        } finally {
          setIsLoading(false);
        }
      }

      sendEmailAndWhatsApp();
    }
  }

  const handleShare = () => {
    const shareData = {
      title: 'Neza Startup',
      text: 'Check out Neza Startup!',
      url: 'https://www.nezastartup.com',
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <header>
        <h1>Contact Us</h1>
        <h2>Everything starts here</h2>
      </header>

      <form className={styles.contactForm} ref={formRef} onSubmit={handleSubmit}>

        <fieldset className={styles.fieldset}>
          <label htmlFor="status" className={styles.statusLabelName}>Send through {isWhatsAppActive ? 'WhatsApp' : 'Email'}:&nbsp;
            <input type="checkbox" id="status" name="status" onChange={toggleStatus} checked={isWhatsAppActive} className={styles.statusCheckbox} />
            <label htmlFor="status" className={styles.statusLabel}></label>
          </label>

          {
            !isWhatsAppActive ? (
              <label htmlFor="client" className={styles.checkboxLabelName}>({isCheckedDesktopEmail ? 'Desktop App' : 'Web Client'})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleCheckbox} checked={isCheckedDesktopEmail} className={styles.checkbox} />
                <label htmlFor="client" className={styles.checkboxLabel}></label>
              </label>
            ) : (
              <label htmlFor="client" className={styles.checkboxLabelName}>({isCheckedWhatsappLink ? 'URL Link' : 'Cloud API'})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleChecked} checked={isCheckedWhatsappLink} className={styles.checkbox} />
                <label htmlFor="client" className={`${styles.checkboxLabel} ${styles.whatsapp}`}></label>
              </label>
            )
          }
        </fieldset>

        <legend>Type your <span>personal</span> or <span>business</span> information in the contact form to get in touch with us.</legend>

        <fieldset>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Requesting services" value={formData.subject} onChange={handleInputChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Nevan Starton" value={formData.name} onChange={handleInputChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email: {!isWhatsAppActive && <span>&#40;Required&#41;</span>}</label>
          <input type="email" id="email" name="email" placeholder="nevan.starton@example.com" autoComplete='email' required={!isWhatsAppActive} value={formData.email} onChange={handleInputChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="phone">Phone: {isWhatsAppActive && <span>&#40;Required&#41;</span>}</label>
          <input type="tel" id="phone" name="phone" placeholder="+52 123 456 7890" autoComplete='tel' required={isWhatsAppActive} value={formData.phone} onChange={handleInputChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message here..." value={formData.message} onChange={handleInputChange}></textarea>
        </fieldset>

        <Modal ref={modalRef} />

        <div className={styles.formActions}>
          <span className={styles.disclaimer}>By submit you are agree with our Terms and Conditions&#8599; and our Privacy Policy&#8599;.</span>
          <button type="submit" disabled={!isFormValid || isLoading} className={`${styles.submitButton} ${isWhatsAppActive ? styles.whatsapp : styles.email}`}>
            {
              isLoading ? (
                <>
                  <span>Sending {isWhatsAppActive ? 'WhatsApp' : 'Email'}...</span>
                  <span className={styles.loadingSpinner}></span>
                </>
              ) : (
                <>
                  Send {isWhatsAppActive ? 'WhatsApp' : 'Email'}&nbsp;<FontAwesomeIcon icon={isWhatsAppActive ? faWhatsapp : faPaperPlane} className={styles.icon} />
                </>
              )
            }
          </button>
        </div>

      </form>

      <div className={styles.contactInfo}>
        <span>
          Other ways to connect:
        </span>
        <ul className={styles.contactList}>
          <li><a href="mailto:info@neza.com">Chat with our sales team &#8599;{/* a sales man, an agent, representative */}</a></li>
          <li><a href="tel:+527774447232"><FontAwesomeIcon icon={faPhone} /> +52 777 444 7232 &#8599;</a></li>
          <li><a href="mailto:contact@nezastartup.com"><FontAwesomeIcon icon={faEnvelope} /> contact@nezastartup.com &#8599;</a></li>
          <li><a href="https://www.nezastartup.com/link-in-bio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /> Link in bio &#8599;</a></li>
          <li><a href="https://www.instagram.com/neza.startup/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram &#8599;</a></li>
          <li><a href="https://wa.me/527774447232" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp &#8599;</a></li>
          <li><a href="https://www.facebook.com/neza.startup" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook &#8599;</a></li>
          {/* <li><a href="https://www.linkedin.com/company/neza-startup" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn &#8599;</a></li> */}
          <li><a href="https://calendly.com/neza-startup/meeting" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendar} /> Calendly &#8599;</a></li>
          <li><a href="https://forms.gle/N1qUj644W3iNb6V66" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /> Form &#8599;</a></li>
          <li>
            <span onClick={handleShare} className={styles.socialLink}>
              Share <FontAwesomeIcon icon={faShare} />
            </span></li>
          {/* <li>Live Chat: Available on our website during business hours</li>
        <li>Support Ticket System: Submit a ticket through our website for assistance</li>
        <li>Technical Support: Get help with technical issues related to our products and services</li> */}
          {/* <li>Fax: +1 (234) 567-8901</li>
        <li>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM (local time)</li>
        <li>Customer Support: Available 24/7 via email and chat</li>
        <li>Mailing Address: Neza Startup, 123 Main Street, Anytown, USA</li>
        <li>Feedback Form: Share your feedback and suggestions through our online form</li>
        <li>Newsletter Subscription: Stay updated by subscribing to our newsletter</li>
        <li>Partnership Inquiries: Contact us for potential collaborations and partnerships</li>
        <li>Investor Relations: Reach out to our investor relations team for inquiries</li>
        <li>Press Inquiries: Contact our media relations team for press-related questions</li>
        <li>Careers: Explore job opportunities and apply through our careers page</li>
        <li>Events and Webinars: Register for upcoming events and webinars hosted by Neza Startup</li>
        <li>Community Engagement: Learn about our community initiatives and how to get involved</li>
        <li>Privacy Policy: Review our privacy policy for information on data handling and protection</li>
        <li>Terms of Service: Read our terms of service for details on using our products and services</li>
        <li>Accessibility: Contact us for assistance with accessibility-related concerns</li>
        <li>Product Demos: Schedule a demo to see our products in action</li>
        <li>Training and Workshops: Sign up for training sessions and workshops offered by Neza Startup</li>
        <li>Consultation Services: Request a consultation to discuss your specific needs and requirements</li>
        <li>Customer Testimonials: Read testimonials from our satisfied clients</li>
        <li>Case Studies: Explore case studies showcasing our successful projects</li>
        <li>Whitepapers and Resources: Access valuable resources and whitepapers on industry trends and best practices</li>
        <li>Community Forums: Join our community forums to connect with other users and share knowledge</li>
        <li>Bug Reporting: Report any bugs or issues you encounter while using our products</li>
        <li>Feature Requests: Submit feature requests to help us improve our offerings</li>
        <li>Product Updates: Stay informed about the latest product updates and enhancements</li>
        <li>Social Responsibility Initiatives: Learn about our social responsibility efforts and initiatives</li>
        <li>Environmental Sustainability: Discover how Neza Startup is committed to environmental sustainability and eco-friendly practices</li>
        <li>Community Outreach Programs: Get involved in our community outreach programs and initiatives</li>
        <li>Volunteer Opportunities: Explore volunteer opportunities with Neza Startup and make a difference</li>
        <li>Charity Partnerships: Learn about our partnerships with charitable organizations and how you can contribute</li>
        <li>Alumni Network: Connect with our alumni network and stay engaged with former team members</li>
        <li>Mentorship Programs: Participate in mentorship programs to support professional growth and development</li>
        <li>Industry Conferences: Attend industry conferences and events where Neza Startup is a participant or sponsor</li>
        <li>Networking Events: Join networking events to connect with professionals in your field</li>
        <li>Product Launches: Stay updated on upcoming product launches and announcements from Neza Startup</li>
        <li>Customer Loyalty Programs: Learn about our customer loyalty programs and rewards for our valued clients</li>
        <li>Referral Programs: Refer friends and colleagues to Neza Startup and earn rewards</li>
        <li>Customer Surveys: Participate in customer surveys to provide feedback and help us improve</li>
        <li>Online Community Groups: Join online community groups to connect with like-minded individuals</li>
        <li>Webinars and Online Workshops: Attend webinars and online workshops hosted by Neza Startup</li>
        <li>Product Tutorials: Access product tutorials and guides to maximize your experience with our offerings</li>
        <li>Knowledge Base: Explore our knowledge base for answers to frequently asked questions and troubleshooting tips</li>
        <li>Customer Success Stories: Read success stories from our clients and learn how Neza Startup has helped them achieve their goals</li>
        <li>Industry Insights: Stay informed with industry insights and trends shared by Neza Startup experts</li>
        <li>Thought Leadership Articles: Read thought leadership articles authored by Neza Startup team members</li>
        <li>Product Roadmap: Get a glimpse of our product roadmap and upcoming features</li>
        <li>Beta Testing Opportunities: Participate in beta testing programs for new products and features</li>
        <li>Customer Advisory Board: Join our customer advisory board to provide input on product development and strategy</li>
        <li>Community Recognition Programs: Learn about our community recognition programs and how we celebrate contributions from our users</li>
        <li>Accessibility Feedback: Provide feedback on accessibility features and improvements for our products</li>
        <li>Open Source Contributions: Contribute to open source projects supported by Neza Startup</li>
        <li>Developer Resources: Access developer resources, APIs, and documentation for building integrations with our products</li>
        <li>Security Updates: Stay informed about security updates and best practices for using our products safely</li>
        <li>Address: 123 Main Street, Anytown, USA</li> */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
