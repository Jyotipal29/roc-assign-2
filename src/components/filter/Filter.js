import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/productContext";
import "./filter.css";

const prices = [
  {
    label: "None",
    value: "",
  },
  {
    label: "Hight to Low",
    value: "desc",
  },
  {
    label: "Low to High",
    value: "asc",
  },
];

const categories = [
  { label: "All", value: "" },
  {
    label: "Women",
    value: "women",
  },
  {
    label: "Men",
    value: "men",
  },
  {
    label: "Kids",
    value: "kids",
  },
];

const sizes = [
  { label: "All", value: "" },
  { label: "Small", value: "s" },
  { label: "Medium", value: "m" },
  { label: "Large", value: "l" },
];

const brands = [
  { label: "All", value: "" },
  { label: "Arayna", value: "Arayna" },
  { label: "Aarika", value: "Aarika" },
  { label: "Harpa", value: "Harpa" },
  { label: "W", value: "W" },
  { label: "Van Heusen", value: "Van Heusen" },
  { label: "Biba", value: "Biba" },
  { label: "Allen Solly", value: "Allen Solly" },
];

const Filter = () => {
  const { productDispatch } = useProduct();
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    productDispatch({
      type: "FILTER_CHANGE",
      payload: {
        sort: {
          price,
        },
        filters: {
          brand,
          category,
          size,
        },
      },
    });
  }, [price, brand, category, size]);

  function clearFilters() {
    setPrice("");
    setBrand("");
    setCategory("");
    setSize("");
  }

  return (
    <div className="filter-card">
      <h2>Filters</h2>
      <div className="filters">
        <div className="container">
          <small>Sort:</small>
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            {prices.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <small>Category:</small>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <small>Size:</small>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {sizes.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <small>Brand:</small>
          <select
            value={brand}
            onChange={
              (e) => setBrand(e.target.value)

              // productDispatch({
              //   type: "FILTER_BY_BRAND",
              //   payload: e.target.value,
              // })
            }
          >
            {brands.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={clearFilters}>clear all</button>
    </div>
  );
};

export default Filter;
