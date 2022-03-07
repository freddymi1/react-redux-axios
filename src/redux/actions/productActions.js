/**
 * @author Freddy Michel
 * @description import function
 */
import { ActionTypes } from "../constants/action-types"

/**
 * @author Freddy Michel
 * @description get all products
 * @param {*} products 
 * @returns 
 */
export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

/**
 * @author Freddy Michel
 * @description get one product detail
 * @param {*} product 
 * @returns 
 */
export const selectedProducts = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};

/**
 * @author Freddy Michel
 * @description remove the product selected when click product and show loading
 * @returns 
 */
export const removeSelectedProducts = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};