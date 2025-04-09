import React from 'react';

const ProductCard = ({ id, image, title, rate, price }) => {
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
