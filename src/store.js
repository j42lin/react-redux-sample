import { applyMiddleware, createStore, } from 'redux'; //  Main Redux library
import logger from 'redux-logger';
import reducers from './reducers'; //  List of Reducers we created 

export const store = createStore(reducers, applyMiddleware(logger));
