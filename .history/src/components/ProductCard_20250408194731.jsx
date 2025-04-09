import React from 'react';
import styles from '../styles/ProductCard.module.css';
import Button from './Button';
import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { useCart } from '../context/CartContext';

const ProductCard = ({ image, title, rating, price, id }) => {
  const { addToCart } = useCart();
  const { rate } = rating;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>

      <Link to={`/lista-de-produtos/${title}/${id}`}>
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.rating}>Avaliação: {rate}</p>
          <p className={styles.price}>
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      </Link>
      <div className={styles.containerBtns}>
        <Button addToCart={addToCart} id={id} classBtn={'addButton'}>
          Adicionar à sacola
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
