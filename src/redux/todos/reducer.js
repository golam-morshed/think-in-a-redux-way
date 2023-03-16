import initialState from './initialState';
import { ADDED, DELETED, STATUS_TOGGLED, COLOR_CHANGED, COMPLETE_ALL, CLEAR_ALL } from './actionType';

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            const todoText = action.payload;
            return [
                ...state, { id: nextTodoId(state), text: todoText, completed: false, color: 'yellow' }
            ]

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload)

        case STATUS_TOGGLED:
            return (
                state.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                })
            )

        case COLOR_CHANGED:
            return (
                state.map((todo) => {
                    if (todo.id === action.payload.todoId) {
                        return {
                            ...todo,
                            color: action.payload.color
                        }
                    } else {
                        return todo
                    }
                })
            )

        case COMPLETE_ALL:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEAR_ALL:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: false
                }
            })
        default:
            return state;
    }
}

export default todoReducer