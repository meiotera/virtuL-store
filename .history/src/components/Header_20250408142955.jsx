import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div>Virtual Store</div>

        <div className={styles.navContainer}>
          <nav>
            <a href="">Home</a>
            <a href="">todos os produtos</a>
            <a href="">Sobre</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
