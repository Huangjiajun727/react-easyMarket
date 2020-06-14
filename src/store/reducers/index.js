import { combineReducers } from 'redux';
import home from './home';
import common from './common';
import topic from './topic';

const CombineReducers = combineReducers({
    home,
    common,
    topic
})

export default CombineReducers;
