import { put } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes'

export function requestBefore(callBack) {
    return function* (params) {
        yield put({
            type: actionTypes.LOADING_START
        });
        if (callBack) {
            yield* callBack(params);
            window.scrollTo(0, 0);
        }
        yield put({
            type: actionTypes.LOADING_END,
        });
    }
}