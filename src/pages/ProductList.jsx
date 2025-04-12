import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

import styles from '../styles/ProductList.module.css';
import Loading from '../components/Loading';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleAddToCartMessage = () => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  };

  return (
    <div className={styles.containerProducts}>
      {loading && <Loading />}

      {showMsg && (
        <div className={styles.toast}>✅ Produto adicionado ao carrinho!</div>
      )}

      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={handleAddToCartMessage}
        />
      ))}
    </div>
  );
};

export default ProductList;
