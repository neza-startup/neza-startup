import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../styles/Q&A.module.css';

const QnA = () => {
  const DEFAULT_VISIBLE_QUESTIONS = 5;
  const [showAll, setShowAll] = useState(false);

  const questions = [
    {
      question: "What is Neza Startup?",
      answer: "Neza Startup is a marketing and software startup that provides innovative solutions for businesses."
    },
    {
      question: "What services does Neza Startup offer?",
      answer: "Neza Startup offers a range of services including digital marketing, web development, and software solutions tailored to meet the needs of businesses."
    },
    {
      question: "Which are your work modalities?",
      answer: "We offer flexible work modalities including remote, on-site, and hybrid options to accommodate the preferences and needs of our clients."
    },
    {
      question: "How much does your services cost?",
      answer: "The cost of our services varies depending on the specific needs and requirements of each project. We provide customized quotes based on the scope and complexity of the work."
    },
    {
      question: "How can we contact Neza Startup?",
      answer: "You can contact us through our website's contact form, email, social platforms, or by calling our customer service line."
    },
    {
      question: "Where is Neza Startup located?",
      answer: "Neza Startup was founded in Monterrey N.L., Mexico. However, we are currently based in Mexico City, Mexico and we serve clients from various locations and offer remote services."
    },
    {
      question: "Why choose Neza Startup over other companies?",
      answer: "Neza Startup stands out due to our innovative approach, commitment to quality, and personalized service. We prioritize understanding our clients' unique needs and delivering solutions that drive results."
    }/* ,
    {
      question: "What is the typical timeline for a project with Neza Startup?",
      answer: "The typical timeline for a project with Neza Startup varies depending on the complexity and scope of the project. We work closely with our clients to establish realistic timelines and ensure timely delivery."
    } *//* ,
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we offer ongoing support and maintenance services to ensure that our clients' projects continue to run smoothly after completion."
    } */
    /* {
      question: "Can Neza Startup help with branding and design?",
      answer: "Absolutely! We have a team of creative professionals who specialize in branding and design to help businesses establish a strong visual identity."
    },
    {
      question: "What industries does Neza Startup serve?",
      answer: "Neza Startup serves a wide range of industries including technology, healthcare, retail, education, and more. We tailor our services to meet the unique needs of each industry."
    },
    {
      question: "How do I get started with Neza Startup?",
      answer: "To get started, simply reach out to us through our contact form or email, and one of our representatives will guide you through the process."
    } */
  ];

  const canExpand = questions.length > DEFAULT_VISIBLE_QUESTIONS;
  return (
    <section className={styles.qna} id="qna">
      <header className={styles.header}>
        <h1>Q&A</h1>
        <h2>Star Questions, Clear Answers</h2>
      </header>
      <div className={styles.questions}>
        {questions.map((q, index) => (
          <details
            key={index}
            name="accordion"
            className={`${styles.questionItem} ${index < DEFAULT_VISIBLE_QUESTIONS || showAll ? styles.visible : styles.hidden}`}
          >
            <summary>{q.question}</summary>
            <p>{q.answer}</p>
          </details>
        ))}
      </div>
      <footer className={styles.footer}>
        <span>Have any other questions?</span>
        <a href="mailto:contact@nezastartup.com">Let us know!</a>
        {canExpand ? (
          <button onClick={() => setShowAll((prev) => !prev)} className={styles.viewAllButton}>
            {showAll ? 'View less' : 'View all'}
            &nbsp;
            {showAll ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
          </button>
        ) : null}
      </footer>
    </section>
  );
};

export default QnA;
