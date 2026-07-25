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
      question: "How can we contact Neza Startup?",
      answer: "You can contact Neza Startup through our website's contact form, email, or by calling our customer service line."
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
