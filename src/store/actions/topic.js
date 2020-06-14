import actionsTypes from './actionTypes';

export function fetchData(params) {
  return {
    type: actionsTypes.TOPIC_GETDATA_REQUEST,
    params
  }
}