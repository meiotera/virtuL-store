import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleProduct } from '../services/api';

import styles from '../styles/ProductDetail.module.css';
import Button from '../components/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getASingleProduct(id);
      setProduct(data);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>

      <div>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>
          Preço:
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p className={styles.rating}>Avaliação: {product.rating.rate}</p>
      </div>

      <div className={styles.containerBtns}>
        <Button classBtn={'addButton'}>Adicionar à sacola</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
