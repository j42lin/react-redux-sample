import { combineReducers } from 'redux'
import todos from './todos';
import todo from './todo';

const rootReducer = combineReducers({
  todoText: todo,
  todos,
})

export default rootReducer;
