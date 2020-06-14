import { getTopicData } from '../../http/getData';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import { requestBefore } from './request';

export function* topic(action) {
    try {
        const data = yield call(getTopicData, action.parmas);
        console.log(data)
        yield put({
            type: actionTypes.TOPIC_GETDATA_SUCCESS,
            topicData: data.data,
            totalCount: data.count
        })
    } catch (err) {
        yield put({
            type: actionTypes.TOPIC_GETDATA_FAILURE,
        })
    }
}

export default function* root() {
    yield all([
        takeLatest(actionTypes.TOPIC_GETDATA_REQUEST, requestBefore(topic))
    ]);
}