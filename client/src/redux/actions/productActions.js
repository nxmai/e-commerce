import * as actionTypes from "../constants/productConstants";
import axios from "axios";
import productApi from "../../api/productApi";


export const getProducts = (params) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const data = await productApi.getAll(params);
   
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data.data,
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
  
      const { data } = await productApi.getSingleProduct(`/product/${id}`);
      //console.log('data', data);
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

  // export const getBrands = () => async (dispatch) => {
  //   try {
  //     dispatch({ type: actionTypes.GET_BRANDS_REQUEST });
      
  //     const { data } = await axios.get("/product/brands");
      
  //     dispatch({
  //       type: actionTypes.GET_BRANDS_SUCCESS,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: actionTypes.GET_BRANDS_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  // };
