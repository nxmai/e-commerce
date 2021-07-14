import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

//import from reducer
import { getProductDetailsReducer, getProductsReducer, getBrandsReducer } from './reducers/productReducers';

const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    // getBrands: getBrandsReducer
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
