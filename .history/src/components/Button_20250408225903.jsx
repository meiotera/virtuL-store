import React from 'react';
import styles from '../styles/Button.module.css';

import { useCart } from '../context/CartContext';

const Button = ({ children, classBtn, product }) => {
  const { addToCart } = useCart();

  const { image, title, rating, price, id, description, category } = product;

  return (
    <button
      onClick={() =>
        addToCart(image, title, rating, price, id, description, category)
      }
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
