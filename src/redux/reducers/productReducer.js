/**
 * @author Freddy Michel
 * @description import all dependancies and function
 */
import { ActionTypes } from "../constants/action-types";

/**
 * @author Freddy Michel
 * @description init state value
 */
const initialState = {
    products: []
};

/**
 * @author Freddy Michel
 * @description productList reducer (get all the product)
 * @param {*} state 
 * @param {*} param1 
 * @returns 
 */

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        
        default:
            return state;
    }
}

/**
 * @author Freddy Michel
 * @description selected product and remove selected product reducer (get single product)
 * @param {*} state 
 * @param {*} param1 
 * @returns 
 */
export const selectedProductReducer = (state = {}, {type, payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
    
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};

        default:
            return state;
    }
}