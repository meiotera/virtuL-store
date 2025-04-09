import React from 'react';

const ProductCard = ({ id, image, title, rating, price }) => {
  const { rate } = rating;
  return (
    <div key={id}>
      <div>
        <img src={`${image}`} alt={title} />
      </div>
      <div>
        {rate}
        {price}
      </div>
    </div>
  );
};

export default ProductCard;
