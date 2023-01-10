import React from "react";
import "./product.css";
const Product = ({ item }) => {
  return (
    <div className="prod-card">
      <img src={item.imageUrl} alt="" />
      <div className="prod-details">
        <h3 className="brand">{item.brand}</h3>
        <p className="desc">{item.description}</p>
        <p className="price">Rs {item.price}</p>
        {item?.size?.map((item) => (
          <p className="size">{item}</p>
        ))}
        <p className="cat">{item.category}</p>
      </div>
    </div>
  );
};

export default Product;
