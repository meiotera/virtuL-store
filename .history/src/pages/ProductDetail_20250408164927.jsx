import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleProduct } from '../services/api';

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
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>
        Preço:{' '}
        {product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <p>Avaliação: {product.rating.rate}</p>
    </div>
  );
};

export default ProductDetail;
