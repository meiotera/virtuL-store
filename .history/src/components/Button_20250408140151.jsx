import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ children, classBtn }) => {
  return (
    <button
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
