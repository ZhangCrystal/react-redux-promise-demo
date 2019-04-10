import {fetch} from 'whatwg-fetch';
import { createAction } from 'redux-actions'
export const GET_WEATHER = "GET_WEATHER";
// export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
// export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";
export const getWeather = createAction(GET_WEATHER, (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(function (res) {
            res.json().then(function(data){
                resolve(data)
            });
        })
        .catch(function (err) {
            reject(err)
        });
    })
})