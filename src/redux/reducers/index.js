/**
 * @author Freddy Michel
 * @description import all dependancies and function
 */
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

/**
 * @author Freddy Michel
 * @description combine all reducer
 */
export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})