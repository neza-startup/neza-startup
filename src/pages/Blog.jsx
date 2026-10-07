import { faArrowTrendUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { Link } from "react-router-dom";
import PaginationButtons from "../components/PaginationButtons.jsx";
import useArticles from "../hooks/useArticles.js";
import usePagination from "../hooks/usePagination.jsx";
import styles from "../styles/Blog.module.css";

function Blog() {
  const { articles } = useArticles();
  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentOrder, setCurrentOrder] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredAndSortedArticles = (filter, order, term) => {
    let result = [...articles];

    if (filter !== "all") {
      result = result.filter((article) => {
        if (filter === "trending") return article.trending;
        if (filter === "featured") return article.featured;

        return (
          article.date.startsWith(filter) ||
          article.author.some((articleAuthor) => articleAuthor.name === filter) ||
          article.hashtags.some((hashtag) => hashtag === filter)
        );
      });
    }

    const normalizeText = (value) =>
      String(value ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const searchWords = normalizeText(term)
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (searchWords.length > 0) {
      result = result.filter((article) => {
        const searchableText = normalizeText(
          `${article.title} ${article.description} ${article.date} ${article.hashtags.join(" ")} ${article.author.map((author) => author.name).join(" ")}`
        );

        return searchWords.some((word) =>
          searchableText.includes(word)
        );
      });
    }

    if (order === "asc") {
      result.sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );
    } else if (order === "desc") {
      result.sort(
        (a, b) =>
          new Date(a.date) - new Date(b.date)
      );
    } else if (order === "a-z") {
      result.sort(
        (a, b) =>
          a.title.localeCompare(b.title)
      );
    } else if (order === "z-a") {
      result.sort(
        (a, b) =>
          b.title.localeCompare(a.title)
      );
    } else if (order === "shortest") {
      result.sort(
        (a, b) =>
          a.readTime - b.readTime
      );
    } else if (order === "longest") {
      result.sort(
        (a, b) =>
          b.readTime - a.readTime
      );
    }

    return result;
  };

  const currentArticles = getFilteredAndSortedArticles(
    currentFilter,
    currentOrder,
    searchTerm
  );

  const { maxPage, page, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo, pageValues } = usePagination({ values: currentArticles, pageSize: recordsPerPage });

  /* const searchArticles = (term) => {
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
  }; */

  const filterWatches = (filter) => {
    setCurrentFilter(filter);
    reset();
  };

  const orderWatchesByPrice = (order) => {
    setCurrentOrder(order);
    reset();
  };

  const showItemsPerPage = (items) => {
    setRecordsPerPage(items);
    reset();
  };

  const searchArticles = (term) => {
    setSearchTerm(term);
    reset();
  }

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
            <div className={styles.search}>
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

              {(
                currentFilter !== "all" ||
                currentOrder !== "none" ||
                searchTerm.trim() !== ""
              ) && (
                  <div className={styles.resultsContainer}>
                    <span>
                      Results: <span>{pageValues.length}</span> {" "}
                      {pageValues.length === 1 ? "article" : "articles"} of{" "}<span>
                        {articles.length}</span> articles in total.
                    </span>
                  </div>
                )}
            </div>

            <div className={styles.showItemsContainer/* headerControls */}>
              <label htmlFor="showItemsSelect" className={styles.showItemsLabel}>Articles per page: </label>
              <select id='showItemsSelect' name='showItemsSelect' className={styles.showItemsSelect} value={recordsPerPage} onChange={(e) => { showItemsPerPage(Number(e.target.value)); }}>
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={articles.length}>All</option>
              </select>
            </div>

            {/* select filter by article */}
            <div className={styles.filterAndOrderContainer}>
              <div className={styles.filterContainer}>
                <label htmlFor="filterSelect" className={styles.filterLabel}>Filter by:</label>
                <select id='filterSelect' name='filterSelect' className={styles.filterSelect} value={currentFilter} onChange={(e) => filterWatches(e.target.value)}>
                  <option value="all">All</option>
                  <optgroup label="Status">
                    <option value="trending">Trending</option>
                    <option value="featured">Featured</option>
                  </optgroup>
                  <optgroup label="Authors">
                    {/* Gets the authors, removes duplicates, and converts the Set (collection of unique values) into an array. */}
                    {
                      [...new Set(articles.flatMap((article) => article.author.map((author) => author.name)))].map((authorName) => (
                        <option key={authorName} value={authorName}>{authorName}</option>
                      ))
                    }
                  </optgroup>
                  <optgroup label="Dates">
                    {/* Gets the years, removes duplicates, and converts the Set into an array. */}
                    {
                      [...new Set(articles.map((article) => article.date.slice(0, 4)))].map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))
                    }
                  </optgroup>
                  <optgroup label="Hashtags">
                    {/* Gets the hashtags, removes duplicates, and converts the Set into an array. */}
                    {
                      [...new Set(articles.flatMap((article) => article.hashtags))].map((hashtag) => (
                        <option key={hashtag} value={hashtag}>{hashtag}</option>
                      ))
                    }
                  </optgroup>
                </select>
              </div>

              {/* select order by time and title */}
              <div className={styles.orderContainer}>
                <label htmlFor="orderSelect" className={styles.orderLabel}>Order by:</label>
                <select id='orderSelect' name='orderSelect' className={styles.orderSelect} value={currentOrder} onChange={(e) => orderWatchesByPrice(e.target.value)}>
                  <option value="none">None</option>
                  <optgroup label="Time">
                    <option value="asc">Most Recent</option>
                    <option value="desc">Least Recent</option>
                  </optgroup>
                  <optgroup label="Title">
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                  </optgroup>
                  <optgroup label="Reading Time">
                    <option value="shortest">Shortest</option>
                    <option value="longest">Longest</option>
                  </optgroup>
                </select>
              </div>
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

                  <span className={styles.authorName}>
                    {author.name}
                  </span>
                </span>
              ))}
            </span>
            <p>{article.description}</p>
            <span className={styles.hashtags}>{/* Hashtags:  */}{article.hashtags.join(" ")}</span>
            <span>{/* Published on:  */}{article.date} · {/* - |Read time:  */}{article.readTime} min read</span>

            {
              (article.trending || article.featured) && (
                <div className={styles.articleStatus}>
                  {article.trending && <span className={styles.trending}><FontAwesomeIcon icon={faArrowTrendUp} /> Trending</span>}
                  &nbsp;
                  {article.featured && <span className={styles.featured}><FontAwesomeIcon icon={faStar} /> Featured</span>}
                </div>
              )}

            {/* <div className={styles.articleStats}> */}
            {/* <span className={styles.comments}>{article.comments} comments</span>
              <span className={styles.likes}>{article.likes} likes</span>
              <span className={styles.shares}>{article.shares} shares</span> */}
            {/* <span className={styles.views}>{article.views} views</span>
            </div> */}

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

            <Link
              to={`/blog/article/${article.id}`}
              className={styles.readMoreLink}
            /* state={{ from: 'blog' }} */
            >
              Read More &rarr;
            </Link>
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
