import {takeLatest, put, all} from 'redux-saga/effects';

import {addEmployee, editEmployee, deleteEmployee} from './actions';

export function* addNewEmployee({payload}) {
    yield put(addEmployee(payload));
}

export function* editCurrentEmployee({payload}) {
    yield put(editEmployee(payload));
}

export function* deleteCurrentEmployee({payload}) {
    yield put(deleteEmployee(payload));
}

export default all([
    takeLatest('@employee/ADD_EMPLOYEE', addNewEmployee),
    takeLatest('@employee/EDIT_EMPLOYEE', editCurrentEmployee),
    takeLatest('@employee/DELETE_EMPLOYEE', deleteCurrentEmployee)
]);