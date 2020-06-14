import { all, fork } from 'redux-saga/effects';
import home from './home';
import topic from './topic';
import catalog from './catalog';
import goods from './goods';

export default function* root() {
    yield all([
        fork(home),
        fork(topic),
        fork(catalog),
        fork(goods),
    ]);
}
