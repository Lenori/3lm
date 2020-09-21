export function addRole(role) {
    return {
        type: '@role/ADD_ROLE',
        payload: {role}
    }
}

export function editRole(role, index) {
    return {
        type: '@role/EDIT_ROLE',
        payload: {role, index}
    }
}