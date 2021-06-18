import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts = (filter, page) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    
    var url;
    if(filter.length === 0){
      url = `/product?page=${page}`;
    } else{
      url = `/product?${filter.join('&')}&page=${page}`;
    }
    const { data } = await axios.get(url);
   
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/product/${id}`);
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getBrands = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_BRANDS_REQUEST });
      
      const { data } = await axios.get("/product/brands");
      
      dispatch({
        type: actionTypes.GET_BRANDS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_BRANDS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
