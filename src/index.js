import React from 'react';
import ReactDOM from 'react-dom';
import './Sources/index.css';
import App from './Components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import addTask from './Reducers/reducer';


export const store = createStore(addTask, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

