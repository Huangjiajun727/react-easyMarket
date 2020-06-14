import { all, fork } from 'redux-saga/effects';
import home from './home';
import topic from './topic';

export default function* root() {
    yield all([
        fork(home),
        fork(topic),
    ]);
}
