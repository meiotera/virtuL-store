import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

import styles from '../styles/ProductList.module.css';

const ProductList = () => {
  const [products, setProdutcts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProdutcts(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.containerProducts}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          rating={product.rating}
          description={product.description}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
