import { handleActions } from 'redux-actions'
import * as types from "../actions/lanes";
export default handleActions({
    [types.GET_WEATHER] (state, action) {
        return {
            ...state,
            weather: action.payload
        }
    },
    [types.MINUS] (state, action) {
        return {
            ...state,
            num: action.payload-1
        }
    },
}, {
    weather: [],
    num:0
})