import React from 'react';
import styles from '../styles/ProductCard.module.css';
import Button from './Button';

const ProductCard = ({ image, title, rating, price }) => {
  const { rate } = rating;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.rating}>Avaliação: {rate}</p>
        <p className={styles.price}>
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <div className={styles.containerBtns}>
          <a classBtn={'addButton'}>Adicionar à sacola</a>
          <Button classBtn={'detailsButton'}>Detalhes</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
