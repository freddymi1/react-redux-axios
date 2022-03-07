/**
 * @author Freddy Michel
 * @description import all dependancies and function
 */
import { createStore } from "redux";
import { reducers } from "./reducers";

/**
 * @author Freddy Michel
 * @description create store
 */
const store = createStore(
    reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;