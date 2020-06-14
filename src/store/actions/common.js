import actionTypes from './actionTypes'

export function startLoading() {
    return {
        type: actionTypes.LOADING_START,
    }
}

export function endLoading() {
    return {
        type: actionTypes.LOADING_END,
    }
}

export function loginSuccess() {
    return {
        type: actionTypes.CHECK_LOGIN_SUCCESS,
    }
}

export function loginFailure() {
    return {
        type: actionTypes.CHECK_LOGIN_FAILURE,
    }
}