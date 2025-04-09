import React from 'react';
import styles from '../styles/Button.module.css';

import { useCart } from '../context/CartContext';

const Button = ({ children, classBtn }) => {
  const { addToCart } = useCart();

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
