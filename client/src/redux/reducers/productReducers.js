import * as actionTypes from '../constants/productConstants'

export const getProductsReducer = (state = {products: []}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload.products,
                countAllProducts: action.payload.countAllProducts,
                loading: false,
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                arror: action.payload
            }
        default:
            return state
    }
};

export const getProductDetailsReducer = (state = {product: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                product: action.payload,
                loading: false,
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                arror: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
            };
        default:
            return state
    }
};

export const getBrandsReducer = (state = {brands: []}, action) => {
    switch(action.type){
        case actionTypes.GET_BRANDS_REQUEST:
            return {
                loading: true,
                brands: []
            };
        case actionTypes.GET_BRANDS_SUCCESS:
            return {
                brands: action.payload,
                loading: false,
            };
        case actionTypes.GET_BRANDS_FAIL:
            return {
                loading: false,
                arror: action.payload
            }
        default:
            return state
    }
};