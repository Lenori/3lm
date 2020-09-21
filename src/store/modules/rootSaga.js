import {all} from 'redux-saga/effects';

import roles from './roles/reducer';
import employees from './employees/reducer';

export default function* rootSaga() {
    return yield all([
        roles,
        employees
    ]);
}