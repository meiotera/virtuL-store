import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>Virtual Store</div>

      <div className={styles.navContainer}>
        <nav>
          <div className={styles.bag}>
            <img src="../sacola.png" alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
