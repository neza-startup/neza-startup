import styles from '../styles/Q&A.module.css';

const QnA = () => {

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
    /* {
      question: "What is the typical timeline for a project with Neza Startup?",
      answer: "The typical timeline for a project with Neza Startup varies depending on the complexity and scope of the project. We work closely with our clients to establish realistic timelines and ensure timely delivery."
    }, */
    {
      question: "How can we contact Neza Startup?",
      answer: "You can contact us through our website's contact form, email, social platforms, or by calling our customer service line."
    }
  ];

  return (
    <section className={styles.qna}>
      <header className={styles.header}>
        <h1>Q&A</h1>
        <h2>Star Questions, Clear Answers</h2>
      </header>
      <div className={styles.questions}>
        {questions.map((q, index) => (
          <details key={index} name="accordion">
            <summary>{q.question}</summary>
            <p>{q.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default QnA;
