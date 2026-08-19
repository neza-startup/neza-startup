import styles from '../styles/Products.module.css';

const Products = () => {
  return (
    <section className={styles.products} id="products">
      <header className={styles.header}>
        <h1>{/* Staring */}Our Products</h1>
        <h2>{/* Our most used products, t */}Trusted by many users</h2>
      </header>
      <div className={styles.productList}>
        <div className={styles.productItem}>
          <h3>{/* —  */}myCover{/*  — */}</h3>
          <span>“Where Party Starts”</span>
          <p>Easily share, create and save unique and personalized digital tickets</p>
          <a href="#contact"/* "https://mycover.nezastartup.com"  */ /* target="_blank" rel="noopener noreferrer" */>More info{/* Visit myCover */}</a>
        </div>
        <div className={styles.productItem}>
          <h3>{/* —  */}myCustomLinks{/*  — */}</h3>
          <span>“Your links in one page”</span>
          <p>Your page with all your links, centralizing your digital presence in one place.</p>
          <a href="#contact"/* "https://mycustomlinks.nezastartup.com" target="_blank" rel="noopener noreferrer" */>More info{/* Visit myCustomLinks */}</a>
        </div>
      </div>
    </section>
  );
};

export default Products;
