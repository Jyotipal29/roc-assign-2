import React from "react";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="fil-container">
        <Filter />
      </div>
      <div className="prod-container">
        <Products />
      </div>
    </div>
  );
};

export default Home;
