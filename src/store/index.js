import { createStore } from 'redux';
import data from './data';
import actionMethods from './methods';

const reducer = function (state = data, action) {
    if(action.type.indexOf('@@redux') === -1) {
        state = actionMethods[action.type](state,action);
    }

    return {...state}
}

const store = createStore(reducer);

export default store;