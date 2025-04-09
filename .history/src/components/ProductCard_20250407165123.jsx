import React from 'react';

import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ image, title, rating, price }) => {
  const { rate } = rating;
  return (
    <div className={styles.productCard}>
      <div className={styles.containerImageCard}>
        <img src={`${image}`} alt={title} />
      </div>
      <div className={styles.descriptionCard}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <p>{rate}</p>
        <p>
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
