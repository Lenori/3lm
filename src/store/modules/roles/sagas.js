import {takeLatest, put, all} from 'redux-saga/effects';

import {addRole, editRole} from './actions';

export function* addNewRole({payload}) {
    yield put(addRole(payload));
}

export function* editCurrentRole({payload}) {
    yield put(editRole(payload));
}

export default all([
    takeLatest('@role/ADD_ROLE', addNewRole),
    takeLatest('@role/EDIT_ROLE', editCurrentRole)
]);