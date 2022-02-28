const baseURL = "https://fakestoreapi.com/products";
import axios from "axios";

export const getProducts = async () => {
  let products = [];
  try {
    const response = await axios.get(baseURL);
    products = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    type: "PRODUCTS_LIST",
    payload: products,
  };
};

export const getProductDetails = async (id) => {
  let product = {};
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    product = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    type: "PRODUCT_DETAILS",
    payload: product,
  };
};

export const clearDetails = () => {
  return {
    type: "CLEAR_DETAILS",
  };
};
