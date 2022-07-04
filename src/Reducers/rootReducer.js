import { combineReducers } from 'redux';

// Import Reducers
import checkoutReducer from "./checkoutReducer";

//Combine Reducers For Each Module Here...
let rootReducer = combineReducers({
    checkoutReducer: checkoutReducer,
});

// Serve Root Reducer

export default rootReducer;
