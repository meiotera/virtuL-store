import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ children, classBtn }) => {
  return (
    <button className={`${styles.button} ${classBtn && styles.detailsButton}`}>
      {children}
    </button>
  );
};

export default Button;
