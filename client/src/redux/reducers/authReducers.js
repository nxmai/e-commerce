import * as actionTypes from  "../constants/authConstants";

const initialState = {
    token: null,
    user: null,
    error: null,
    loading: false
    //authenticating
}

export const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_REQUEST:
            return state;
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.errors,
            }
        
        case actionTypes.LOGOUT_REQUEST:
            return state;
        case actionTypes.LOGOUT_SUCCESS:
            return state = {...initialState}
        case actionTypes.LOGOUT_FAILURE:
            return state;


        case actionTypes.SIGNUP_REQUEST:
            return state;
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                error: null,
            }
        case actionTypes.SIGNUP_FAILURE:
            // console.log('reducer error failure', action.payload.errors );
            return {
                ...state,
                error: action.payload.errors,
            }
        default:
            return state;
    }
}