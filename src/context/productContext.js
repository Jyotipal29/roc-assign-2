import { createContext, useContext, useMemo, useReducer } from "react";
import { v4 as uuid } from "uuid";
import ProductReducer from "./productReducer";
import rawProducts from "../data";

const productss = rawProducts.map((product) => {
  product.id = uuid();
  return product;
});

const productContext = createContext();
export const useProduct = () => {
  return useContext(productContext);
};

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductReducer, {
    products: productss,
    sort: {
      price: "",
    },
    filters: {
      category: "",
      size: "",
      brand: "",
    },
  });

  const filteredProducts = useMemo(() => {
    const products = !productState.sort.price
      ? productss
      : productss.sort((a, b) =>
          productState.sort.price === "asc"
            ? a.price - b.price
            : b.price - a.price
        );
    console.log(productState.sort, productState.filters, products);

    return products
      .filter((product) => {
        // Filter By brand

        return (
          !productState.filters.brand ||
          product.brand.toLowerCase() ===
            productState.filters.brand.toLowerCase()
        );
      })
      .filter((product) => {
        // Filter By category

        return (
          !productState.filters.category ||
          product.category.toLowerCase() === productState.filters.category
        );
      })
      .filter((product) => {
        // Filter By size

        return (
          !productState.filters.size ||
          product.size.includes(productState.filters.size)
        );
      });
  }, [productState]);

  return (
    <productContext.Provider
      value={{ productState, filteredProducts, productDispatch }}
    >
      {children}
    </productContext.Provider>
  );
};
