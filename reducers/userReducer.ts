// reducers/userReducer.js

// Define initial state for the user
const initialState = {
    currentUser: null,
    isLoggedIn: false,
    loading: false,
    error: null
};

// Define action types
const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
};

// Define the user reducer function
const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                currentUser: action.payload,
                error: null
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                currentUser: null,
                error: action.payload
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                currentUser: null,
                error: null
            };
        default:
            return state;
    }
};

export { userReducer, actionTypes };
