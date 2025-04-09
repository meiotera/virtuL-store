import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';

const ProductList = () => {
  const [products, setProdutcts] = useState([]);

  useEffect(() => {
    const data = getAllProducts();

    setProdutcts(data);
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
