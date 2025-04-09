import React from 'react';

import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ image, title, rating, price }) => {
  const { rate } = rating;
  return (
    <div className={styles.productCard}>
      <div className={styles.containerImageCard}>
        <img src={`${image}`} alt={title} />
      </div>
      <div>
        {rate}
        {price}
      </div>
    </div>
  );
};

export default ProductCard;
