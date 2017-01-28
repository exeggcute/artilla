import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';
import Container from './Container';


const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunkMiddleware)
);


export default function App() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
}
