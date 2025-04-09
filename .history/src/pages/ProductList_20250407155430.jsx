import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';

const ProductList = () => {
  const [products, setProdutcts] = useState([]);

  useEffect(() async => {
    const products = await getAllProducts()
  })

  return <div></div>;
};

export default ProductList;
