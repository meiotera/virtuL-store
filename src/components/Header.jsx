import React from 'react';
import styles from '../styles/Header.module.css';
import MenuNav from './MenuNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <span>🛍️</span> <strong>Virtual</strong>{' '}
          <span className={styles.highlight}>Store</span>
        </div>

        <div className={styles.navContainer}>
          <MenuNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
