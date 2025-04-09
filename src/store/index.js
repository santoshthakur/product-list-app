import { combineReducers, createStore } from "redux";
import productsReducer from "./reducer/product-listing";
import cartReducer from "./reducer/cart";


const rootReducer = combineReducers({
    productList: productsReducer,
    cartList: cartReducer
})

const store= createStore(rootReducer);
export default store
