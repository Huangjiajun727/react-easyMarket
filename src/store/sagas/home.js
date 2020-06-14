import { all, put, takeLatest, call } from 'redux-saga/effects';
import { getHomeData } from '../../http/getData';
import actionTypes from '../actions/actionTypes';
import { requestBefore } from './request';

export function* home() {
    try {
        const data = yield call(getHomeData, {});
        // console.log(data);
        yield put({
            type: actionTypes.HOME_GETDATA_SUCCESS,
            data
        })
    } catch (err) {
        yield put({
            type: actionTypes.HOME_GETDATA_FAILURE
        })
    }
}

export default function* root() {
    yield all([
        yield takeLatest(actionTypes.HOME_GETDATA_REQUEST, requestBefore(home))
    ])
}