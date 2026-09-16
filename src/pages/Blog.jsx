import styles from "../styles/Blog.module.css";
import design from "/public/design.png";

function Blog() {
  const articles = [
    {
      title: "Latest News",
      description: "Stay updated with the latest news and offers from Neza Startup.",
      image: design,
      alt: "Newsletter Image 1"
    },
    {
      title: "Exclusive Offers",
      description: "Get access to exclusive offers and promotions by subscribing to our newsletter.",
      image: design,
      alt: "Newsletter Image 2"
    },
    {
      title: "Community Updates",
      description: "Be part of our community and receive updates on events, workshops, and more.",
      image: design,
      alt: "Newsletter Image 3"
    },
    {
      title: "Latest News 4",
      description: "Stay updated with the latest news and offers from Neza Startup.",
      image: design,
      alt: "Newsletter Image 1"
    },
    {
      title: "Exclusive Offers 5",
      description: "Get access to exclusive offers and promotions by subscribing to our newsletter.",
      image: design,
      alt: "Newsletter Image 2"
    },
    {
      title: "Community Updates 6",
      description: "Be part of our community and receive updates on events, workshops, and more.",
      image: design,
      alt: "Newsletter Image 3"
    }
  ];

  return (
    <section className={styles.blog} id="blog">
      <header className={styles.blogHeader}>
        <h1>Blog</h1>
        <h2>Discover articles on technology, marketing, and digital growth.</h2>
      </header>

      <div className={styles.ArticleCards}>
        <header className={styles.ArticleCardsHeader}>
          <h3>All Articles</h3>
          <p>Explore our latest articles and updates.</p>
        </header>
        {articles.map((article, index) => (
          <div key={index} className={styles.ArticleCard}>
            <img src={article.image} alt={article.alt} />
            <h3>{article.title}</h3>
            <span>{/* Author:  */}John Doe</span>
            <p>{article.description}</p>
            <span>{/* Hashtags:  */}#technology #marketing {/* #digitalgrowth */}</span>
            <span>{/* Published on:  */}2023-01-01 · {/* - |Read time:  */}5 min read</span>

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
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
