import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/productContext";
import FilterControl from "../FilterControl";
import "./filter.css";

const prices = [
  {
    label: "All",
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
      <h2 className="fil-heading">Filters</h2>
      <div className="filters">
        <FilterControl
          label="Sort"
          value={price}
          options={prices}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FilterControl
          label="Category"
          value={category}
          options={categories}
          onChange={(e) => setCategory(e.target.value)}
        />
        <FilterControl
          label="Size"
          value={size}
          options={sizes}
          onChange={(e) => setSize(e.target.value)}
        />
        <FilterControl
          label="Brand"
          value={brand}
          options={brands}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <button onClick={clearFilters} className="reset-btn">
        Clear all
      </button>
    </div>
  );
};

export default Filter;
