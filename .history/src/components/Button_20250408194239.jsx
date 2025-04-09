import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ children, classBtn, addToCart }) => {
  return (
    <button
      onClick={addToCart}
      className={`${styles.button} ${
        classBtn === 'detailsButton'
          ? styles.detailsButton
          : classBtn === 'addButton'
          ? styles.addButton
          : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
