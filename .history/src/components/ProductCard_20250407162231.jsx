import React from 'react';

const ProductCard = ({ image, title, rate, price }) => {
  return (
    <div>
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
