import React from "react";

const Product = props => {
  const { name, price, img } = props;
  return (
    <div className="product">
      <h1>{name}</h1>
      <h3>${price}</h3>
      <img src={img} alt={name} />
    </div>
  );
};

export default Product;
