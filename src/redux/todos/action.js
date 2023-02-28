import { ADDED, DELETED, STATUS_TOGGLED, COLOR_CHANGED } from "./actionType";

export const addNewTodo = ({ todo }) => {
    return {
        type: ADDED,
        payload: todo
    }
}

export const deleteTodo = ({ todoId }) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const toggleStatus = ({ todoId }) => {
    return {
        type: STATUS_TOGGLED,
        payload: todoId
    }
}

export const changeColor = ({ todoId, color }) => {
    return {
        type: COLOR_CHANGED,
        payload: {
            todoId,
            color
        }
    }
}