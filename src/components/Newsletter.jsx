import { useRef, useState } from "react";
/* import PaginationButtons from "../components/PaginationButtons";
import usePagination from "../components/usePagination"; */
import { faChevronLeft, faChevronRight, /* faRotateLeft, faRotateRight */ } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useArticles from "../hooks/useArticles.js";
import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {

  const { articles, loading, error } = useArticles();
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

  /* const recordsPerPage = 3;

  const { maxPage, page, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = usePagination({ values: articles, pageSize: recordsPerPage }); */

  /* const totalItems = articles.length;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex); */

  const cardsRef = useRef(null);


  const scrollCards = (direction) => {
    const container = cardsRef.current;

    if (!container) return;

    const card = container.querySelector(`.${styles.ArticleCard}`);

    if (!card) return;

    const gap = 16;
    const distance = card.getBoundingClientRect().width + gap;

    container.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  /* const toBeggining = () => {
    const container = cardsRef.current;

    if (!container) return;

    container.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  const toEnd = () => {
    const container = cardsRef.current;

    if (!container) return;

    container.scrollTo({
      left: container.scrollWidth,
      behavior: "smooth",
    });
  }; */

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error loading articles: {error.message}</p>;
  }

  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

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
            <input type="email" placeholder="johnappleseed@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Subscribe</button>
          </fieldset>
        </form>
      </div>
      <h3>Latest Articles</h3>
      <div ref={cardsRef} className={styles.ArticleCards}>
        {articles.map((article, index) => (
          <div key={index} className={styles.ArticleCard}>
            <HashLink smooth to={`/blog/article/${article.id}#article`} className={styles.latestArticleLink} state={{ from: 'article' }}>
              <img src={article.image} alt={article.alt} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </HashLink>
          </div>
        ))}

      </div>
      <div className={styles.articleButtons}>
        <button className={styles.prevButton} onClick={() => { scrollCards(-1); }} disabled={false /* isFirstStep */}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Link to="/blog" className={styles.cta}>
          View all articles &rarr;
        </Link>
        <button className={styles.nextButton} onClick={() => { scrollCards(1); }} disabled={false /* isLastStep */}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {/* <button className={styles.toBegginingButton} onClick={toBeggining} >
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
        <button className={styles.toEndButton} onClick={toEnd} >
          <FontAwesomeIcon icon={faRotateRight} />
        </button> */}
        {/* <span>({currentPage + 1} / {totalPages})</span> */}
      </div>
      {/* <PaginationButtons
        maxPage={maxPage}
        page={page}
        isDataGreaterThanPageSize={isDataGreaterThanPageSize}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        next={next}
        previous={previous}
        reset={reset}
        goTo={goTo}
      /> */}
    </section>
  );
};

export default Newsletter;
