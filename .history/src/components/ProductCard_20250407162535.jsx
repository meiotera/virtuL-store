import React from 'react';

const ProductCard = ({ key, image, title, rate, price }) => {
  return (
    <div key={key}>
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
