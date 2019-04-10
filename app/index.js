import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import promiseMiddleware from "redux-promise";
import rootReducer from "./reducers";
import "babel-polyfill";
import App from './pages/App';


const isProduction = process.env.NODE_ENV === "production";

const store = isProduction
    ? compose(applyMiddleware(promiseMiddleware))(createStore)(rootReducer)
    : compose(
        applyMiddleware(promiseMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    )(createStore)(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('app')
);
