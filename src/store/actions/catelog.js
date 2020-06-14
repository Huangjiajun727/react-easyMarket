import actionsTypes from './actionTypes';

export function fetchInitData(parmas) {
  return {
    type: actionsTypes.CATALOG_INITDATA_GETDATA_REQUEST,
    parmas
  }
}

export function fetchCatelogMsg(parmas) {
  return {
    type: actionsTypes.CATALOG_CATALOGMSG_GETDATA_REQUEST,
    parmas
  }
}

export function changeIdAndTabIndex(parmas) {
  return {
    type: actionsTypes.CATALOG_CHANGEIDANDTABINDEX,
    ...parmas
  }
}