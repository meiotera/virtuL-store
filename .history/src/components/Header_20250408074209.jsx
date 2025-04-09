import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>Virtual Store</div>

      <div className={styles.bagContainer}>
        <nav>
          <div className={styles.bag}>
            {' '}
            <img src="../bag.png" alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
