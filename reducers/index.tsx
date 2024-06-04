// reducers/index.ts

import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { categoriesReducer } from './categoriesReducer';
// Import other reducers as needed

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    categories: categoriesReducer,
    // Add other reducers here
});

export default rootReducer;
