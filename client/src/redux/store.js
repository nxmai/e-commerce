import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

//import from reducer
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';
import { authReducers } from './reducers/authReducers';


const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    auth: authReducers,
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
