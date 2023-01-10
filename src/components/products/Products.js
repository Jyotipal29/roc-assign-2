import React from "react";
import "./products.css";
import Product from "../product/Product";
import { useProduct } from "../../context/productContext";
const Products = () => {
  const {
    productState: { products, byBrand, byCat, bySize, sort },
    filteredProducts,
  } = useProduct();

  const fill = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (byBrand) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.brand.includes(byBrand)
      );
    }
    if (byCat) {
      console.log(byCat, "by cat");
      sortedProducts = sortedProducts.filter((prod) =>
        prod.category.includes(byCat)
      );
    }

    return sortedProducts;
  };

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
