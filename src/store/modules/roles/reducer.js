import produce from 'immer';
import {toast} from 'react-toastify';

const initialState = {
    roles: []
};

export default function roles(state = initialState, action) {

    return produce(state, draft => {
        switch (action.type) {
            case '@role/ADD_ROLE': {
                draft.roles.push(action.payload.role);
                toast.success(`Cargo ${action.payload.role.title} adicionado com sucesso!`);
    
                break;
            }

            case '@role/EDIT_ROLE': {
                draft.roles[action.payload.index] = (action.payload.role);
                toast.success(`Cargo ${action.payload.role.title} editado com sucesso!`);
    
                break;
            }

            default:
        }
    });
}