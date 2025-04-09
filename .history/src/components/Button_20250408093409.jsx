import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ children, detailsButton }) => {
  return (
    <button
      className={`${styles.button} ${detailsButton && styles.detailsButton}`}
    >
      {children}
    </button>
  );
};

export default Button;
