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
        <p>{rate}</p>
        <p>
          R${' '}
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
