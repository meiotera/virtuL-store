import React from 'react';
import styles from '../styles/Button.module.css';

import { useCart } from '../context/CartContext';

const Button = ({ children, classBtn, id }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        {
          addToCart(id);
        }
      }}
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
