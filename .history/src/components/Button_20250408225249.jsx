import React from 'react';
import styles from '../styles/Button.module.css';

import { useCart } from '../context/CartContext';

const Button = ({ children, classBtn, product }) => {
  const { addToCart } = useCart();

  console.log(product);

  return (
    <button
      onClick={}
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
