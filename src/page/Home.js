import React from "react";
import { MdMenu } from "react-icons/md";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";
import "./home.css";
const Home = () => {
  function toggleMenu() {
    if (document.body.classList.contains("menu-opened")) {
      document.body.classList.remove("menu-opened");
    } else {
      document.body.classList.add("menu-opened");
    }
  }

  return (
    <>
      <div className="menu-bar">
        <button className="md:hidden" onClick={toggleMenu}>
          <MdMenu size="30px" />
        </button>
      </div>
      <div className="grid grid-cols-12 home-container">
        <div className="filter-container md:col-span-4">
          <Filter />
        </div>
        <div className="prod-container col-span-12 md:col-span-8">
          <Products />
        </div>
      </div>
    </>
  );
};

export default Home;
