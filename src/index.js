import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import root from './reducers'
import {initApp} from './actions'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    root,
    undefined,
    composeWithDevTools(
        applyMiddleware(
            thunk
        ),
    )
);
store.dispatch(initApp());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
