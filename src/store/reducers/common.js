import actionTypes from '../actions/actionTypes';

const user = window.localStorage.getItem('token');

const initialState = {
    isloading: false,
    isLogin: user ? true : false,
    userInfo: null,
};

export default function common(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOADING_START:
            return {
                ...state,
                isloading: true,
            };
        case actionTypes.LOADING_END:
            return {
                ...state,
                isloading: false,
            };
        case actionTypes.CHECK_LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
            };
        case actionTypes.CHECK_LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
            };
        default:
            return state
    }
}