import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';

const ProductList = () => {
  const [products, setProdutcts] = useState([]);

  useEffect(() => {
    const data = getAllProducts();

    setProdutcts(data);
  }, []);

  return <div></div>;
};

export default ProductList;
