import React from 'react';

const ProductCard = ({ image, title, rating, price }) => {
  const { rate } = rating;
  return (
    <div className="">
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
