import actionsTypes from './actionTypes';

export function fetchCount(parmas) {
  return {
    type: actionsTypes.GOODS_COUNT_GETDATA_REQUSET,
    parmas
  }
}
export function fetchGoodsData(parmas) {
  return {
    type: actionsTypes.GOODS_LIST_GETDATA_REQUSET,
    parmas
  }
}