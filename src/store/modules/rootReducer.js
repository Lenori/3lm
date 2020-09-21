import {combineReducers} from 'redux';

import roles from './roles/reducer';
import employees from './employees/reducer';

export default combineReducers({
    roles,
    employees
});