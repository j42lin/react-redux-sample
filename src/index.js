import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'; // Bridge React and Redux
import { applyMiddleware, createStore, } from 'redux'; //  Main Redux library
import logger from 'redux-logger';
import reducers from './reducers'; //  List of Reducers we created 

const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>, 
    document.getElementById('root'));
registerServiceWorker();
