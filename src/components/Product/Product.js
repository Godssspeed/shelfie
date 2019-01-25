import React from "react";

const Product = props => {
  const { key, id, name, price, img } = props;
  return (
    <div className="product">
      <h1>{name}</h1>
      <h3>${price}</h3>
      <img src={img} />
    </div>
  );
};

export default Product;
