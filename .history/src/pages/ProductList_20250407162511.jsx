import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [products, setProdutcts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProdutcts(data);
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          rate={product.rating}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
