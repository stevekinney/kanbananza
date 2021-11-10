import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers'

import Application from './components/Application';

import './index.scss';

const store = createStore(
    rootReducer
);

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>
    , document.getElementById('root'));
