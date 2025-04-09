import React from 'react';

const ProductCard = ({ image, title, rate, price }) => {
  const { rate } = rate;
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
