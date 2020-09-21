export function addEmployee(employee) {
    return {
        type: '@employee/ADD_EMPLOYEE',
        payload: {employee}
    }
}

export function editEmployee(employee, index) {
    return {
        type: '@employee/EDIT_EMPLOYEE',
        payload: {employee, index}
    }
}

export function deleteEmployee(index) {
    return {
        type: '@employee/DELETE_EMPLOYEE',
        payload: {index}
    }
}