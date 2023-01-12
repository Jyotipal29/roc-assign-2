import React from "react";
import "./products.css";
import Product from "../product/Product";
import { useProduct } from "../../context/productContext";
const Products = () => {
  const { filteredProducts } = useProduct();

  return (
    <div className="prod-con">
      {filteredProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
      {filteredProducts.length === 0 && "No products found"}
    </div>
  );
};

export default Products;
