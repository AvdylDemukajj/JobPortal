import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_RESET,
    ALL_USER_LOAD_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_REQUEST,
    USER_APPLY_JOB_RESET,
    USER_APPLY_JOB_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_RESET,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_RESET,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_RESET,
    USER_SIGNUP_SUCCESS
} from "../constants/userConstant"

// sign In reducer
export const userReducerSignIn = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false }
        case USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            }
        case USER_SIGNIN_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload }
        case USER_SIGNIN_RESET:
            return {}
        default:
            return state;
    }
}