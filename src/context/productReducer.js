const ProductReducer = (productState, action) => {
  switch (action.type) {
    case "FILTER_CHANGE":
      return {
        ...productState,
        ...action.payload,
      };
    case "FILTER_BY_BRAND":
      return {
        ...productState,
        filters: {},
        byBrand: action.payload,
      };
    case "SORT_BY_PRICE":
      return { ...productState, sort: action.payload };

    case "FILTER_BY_SIZE":
      return { ...productState, bySize: action.payload };
    case "FILTER_BY_CAT":
      return { ...productState, byCat: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...productState,
        byFastDelivery: false,
        searchQuery: "",
      };
    default:
      return productState;
  }
};
export default ProductReducer;
