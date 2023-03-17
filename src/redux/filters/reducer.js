import initialState from "../filters/initialState";
import { COLOR_FILTERED, STATUS_FILTERED } from './actionType';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_FILTERED:

            return {
                ...state, status: action.payload
            }

        case COLOR_FILTERED:
            switch (action.payload.actionType) {
                case "add":
                    return {
                        ...state,
                        color: [
                            ...state.color,
                            action.payload.color
                        ]
                    }
                case "remove":
                    return {
                        ...state,
                        color: state.color.filter((existingColor) => existingColor !== action.payload.color)
                    }

                default:
                    break;
            }

            return state

        default:
            return state;
    }
}

export default reducer