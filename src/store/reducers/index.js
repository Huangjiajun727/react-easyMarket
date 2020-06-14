import { combineReducers } from 'redux';
import home from './home';
import common from './common';
import topic from './topic';
import catalog from './catalog';
import goods from './goods';

const CombineReducers = combineReducers({
    home,
    common,
    topic,
    catalog,
    goods
})

export default CombineReducers;
