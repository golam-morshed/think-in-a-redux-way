import { ADDED, DELETED, STATUS_TOGGLED, COLOR_CHANGED, COMPLETE_ALL, CLEAR_ALL } from "./actionType";

export const addNewTodo = (todo) => {
    return {
        type: ADDED,
        payload: todo
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const toggleStatus = (todoId) => {
    return {
        type: STATUS_TOGGLED,
        payload: todoId
    }
}

export const changeColor = (todoId, color) => {
    return {
        type: COLOR_CHANGED,
        payload: {
            todoId,
            color
        }
    }
}

export const completeAll = () => {
    return {
        type: COMPLETE_ALL
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}