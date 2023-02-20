import { DINCREMENET, DDECREMENT } from "./dynamicActionTypes"

initialState = {
    value: 0,
}

const counterReducer = (state = initialState, action, value) => {
    switch (action.type) {
        case DINCREMENET:
            return {
                ...state,
                value: state.value + 1
            }

        case DDECREMENT:
            return {
                ...state,
                value: state.value - 1
            }

        default:
            return { ...state }

    }
}