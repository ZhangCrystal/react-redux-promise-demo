import {fetch} from 'whatwg-fetch';
import { createAction } from 'redux-actions'
export const GET_WEATHER = "GET_WEATHER";
export const MINUS='minus';
const fetchData = (url, params) => fetch(url, params);
export const getWeather = createAction(GET_WEATHER, async url => {
        let result=await fetchData(url);
        return result.json()
});

export const dominus = createAction(MINUS, num => {
     return num;
});