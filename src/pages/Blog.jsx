import { useState } from "react";
import author from "../assets/author.png";
import icon from "../assets/icon.svg";
import PaginationButtons from "../components/PaginationButtons";
import usePagination from "../components/usePagination";
import styles from "../styles/Blog.module.css";
import design from "/public/design.png";

function Blog() {
  const articlesCatalog = [
    {
      title: "Latest News",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Stay updated with the latest news and offers from Neza Startup.",
      image: design,
      alt: "Newsletter Image 1",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-01",
    },
    {
      title: "Exclusive Offers",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Get access to exclusive offers and promotions by subscribing to our newsletter.",
      image: design,
      alt: "Newsletter Image 2",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-02"
    },
    {
      title: "Community Updates",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Be part of our community and receive updates on events, workshops, and more.",
      image: design,
      alt: "Newsletter Image 3",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-03"
    },
    {
      title: "Latest News 4",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Stay updated with the latest news and offers from Neza Startup.",
      image: design,
      alt: "Newsletter Image 1",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-04"
    },
    {
      title: "Exclusive Offers 5",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Get access to exclusive offers and promotions by subscribing to our newsletter.",
      image: design,
      alt: "Newsletter Image 2",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-05"
    },
    {
      title: "Community Updates 6",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Be part of our community and receive updates on events, workshops, and more.",
      image: design,
      alt: "Newsletter Image 3",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-06"
    },
    {
      title: "Latest News 7",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Stay updated with the latest news and offers from Neza Startup.",
      image: design,
      alt: "Newsletter Image 1",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2026-01-07"
    },
    {
      title: "Exclusive Offers 8",
      author: [
        {
          "name": "Neza Startup",
          img: icon
        },
        {
          "name": "John Doe",
          img: author
        }
      ],
      description: "Get access to exclusive offers and promotions by subscribing to our newsletter.",
      image: design,
      alt: "Newsletter Image 2",
      hashtags: ["#technology", "#marketing", "#digitalgrowth"],
      date: "2027-01-08"
    },
  ];
  const [articles, setArticles] = useState(articlesCatalog);
  const [recordsPerPage, setRecordsPerPage] = useState(3);

  const { maxPage, page, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = usePagination({ values: articles, pageSize: recordsPerPage });

  const showItemsPerPage = (items) => {
    setRecordsPerPage(items);
    reset();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const searchArticles = (term) => {
    setSearchTerm(term);
    const searchTerms = term.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const filteredArticles = articlesCatalog.filter((article) => {
      const searchableContent = [
        article.title,
        article.description,
        article.date,
        article.hashtags.join(" "),
        article.author.map((author) => author.name).join(" "),
      ].join(" ").toLowerCase();

      return searchTerms.length === 0 || searchTerms.some((searchTerm) => searchableContent.includes(searchTerm));
    });

    setArticles(filteredArticles);
    reset();
  };

  return (
    <section className={styles.blog} id="blog">
      <header className={styles.blogHeader}>
        <h1>Blog</h1>
        <h2>Discover articles on technology, marketing, and digital growth.</h2>
      </header>

      <div className={styles.ArticleCards}>
        <header className={styles.ArticleCardsHeader}>

          <div className={styles.header}>
            <h3>All Articles</h3>
            <p>Explore our latest articles and updates.</p>
          </div>

          <div className={styles.headerControls}>
            <div className={styles.searchContainer}>
              <label htmlFor="searchInput" className={styles.searchLabel}>Search:</label>
              <input type="text" id='searchInput' name='searchInput' className={styles.searchInput} placeholder='Title, authors, description, date, hashtags or time...' value={searchTerm} /* onChange={(e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredWatches = watchCatalog.filter((watch) =>
              watch.name.toLowerCase().includes(searchTerm)
            );
            setWatches(filteredWatches);
          }} */ /* onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase().trim();

              const filteredWatches = watchCatalog.filter((watch) =>
                watch.name.toLowerCase().includes(searchTerm)
              );

              setWatches(filteredWatches);
              reset();
            }} */ onChange={(e) => { searchArticles(e.target.value); }} />
            </div>

            <div className={styles.showItemsContainer/* headerControls */}>
              <label htmlFor="showItemsSelect" className={styles.showItemsLabel}>Articles per page: </label>
              <select id='showItemsSelect' name='showItemsSelect' className={styles.showItemsSelect} value={recordsPerPage} onChange={(e) => { showItemsPerPage(Number(e.target.value)); }}>
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={articles.length}>All</option>
              </select>
            </div>
          </div>
        </header>

        {pageValues.map((article, index) => (
          <div key={index} className={styles.ArticleCard}>
            <img src={article.image} alt={article.alt} />
            <h3>{article.title}</h3>
            <span className={styles.author}>
              {/* Author:  */}
              {
                article.author.map((author, index) => (
                  <img key={index} src={author.img} alt={author.name} className={styles.authorImage} />
                ))
              }
              {article.author.map((author, index) => (
                <span key={index}>
                  {index > 0 && index === article.author.length - 1 && "and "}
                  {author.name}
                </span>
              ))}
            </span>
            <p>{article.description}</p>
            <span className={styles.hashtags}>{/* Hashtags:  */}{article.hashtags.join(" ")}</span>
            <span>{/* Published on:  */}{article.date} · {/* - |Read time:  */}5 min read</span>

            {/*
  <span>{/* Comments: *\/}10 comments</span>
  <span>{/* Likes: *\/}25 likes</span>
  <span>{/* Shares: *\/}5 shares</span>
  <span>{/* Views: *\/}100 views</span>
  <span>{/* Category: *\/}Technology</span>
  <span>{/* Tags: *\/}#tech #innovation #startup</span>
  <span>{/* Related articles: *\/}See related articles below.</span>
  <span>{/* Call to action: *\/}Read more to stay informed!</span>
  <span>{/* Subscribe: *\/}Subscribe to our newsletter for updates.</span>
  <span>{/* Feedback: *\/}We value your feedback and comments.</span>
  <span>{/* Share: *\/}Share this article with your network.</span>
  <span>{/* Bookmark: *\/}Bookmark this article for later reading.</span>
  <span>{/* Print: *\/}Print this article for offline reading.</span>
  <span>{/* Email: *\/}Email this article to a friend.</span>
  <span>{/* Save: *\/}Save this article to your reading list.</span>
  <span>{/* Follow: *\/}Follow the author for more articles.</span>
  <span>{/* Rate: *\/}Rate this article and provide feedback.</span>
  <span>{/* Discuss: *\/}Join the discussion in the comments section.</span>
  <span>{/* Recommend: *\/}Recommend this article to others.</span>
  <span>{/* Translate: *\/}Translate this article into your preferred language.</span>
  <span>{/* Print: *\/}Print this article for offline reading.</span>
  <span>{/* Email: *\/}Email this article to a friend.</span>
  <span>{/* Save: *\/}Save this article to your reading list.</span>
*/}

            <a href="/blog" className={styles.readMoreLink}>
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>

      <div className={styles.totalArticlesContainer}>
        <span>Total articles: <span>{articles.length}</span>.</span>
        &nbsp;
        <span>Showing <span>{pageValues.length}</span> in the page.</span>
      </div>

      <PaginationButtons
        maxPage={maxPage}
        page={page}
        isDataGreaterThanPageSize={isDataGreaterThanPageSize}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        next={next}
        previous={previous}
        reset={reset}
        goTo={goTo}
      />
    </section>
  )
}

export default Blog
