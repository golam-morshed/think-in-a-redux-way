import { STATUS_FILTERED, COLOR_FILTERED } from "./actionType";

export const filterStatus = (status) => {
    return {
        type: STATUS_FILTERED,
        payload: status
    }
}

export const filterColor = (color, actionType) => {
    return {
        type: COLOR_FILTERED,
        payload: {
            color,
            actionType
        }
    }
}