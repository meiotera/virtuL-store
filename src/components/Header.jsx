import React from 'react';
import styles from '../styles/Header.module.css';
import MenuNav from './MenuNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div>Virtual Store</div>

        <div className={styles.navContainer}>
          <MenuNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
