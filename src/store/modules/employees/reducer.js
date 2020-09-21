import produce from 'immer';
import {toast} from 'react-toastify';

const initialState = {
    employees: []
};

export default function employees(state = initialState, action) {

    return produce(state, draft => {
        switch (action.type) {
            case '@employee/ADD_EMPLOYEE': {
                draft.employees.push(action.payload.employee);
                toast.success(`Funcionário ${action.payload.employee.name} adicionado com sucesso!`);
    
                break;
            }

            case '@employee/EDIT_EMPLOYEE': {
                draft.employees[action.payload.index] = (action.payload.employee);
                toast.success(`Funcionário ${action.payload.employee.name} editado com sucesso!`);
    
                break;
            }

            case '@employee/DELETE_EMPLOYEE': {
                draft.employees.splice(action.payload.index, 1);
                toast.success(`Funcionário excluído com sucesso!`);
    
                break;
            }

            default:
        }
    });
}