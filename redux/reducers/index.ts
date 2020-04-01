import { combineReducers } from 'redux';
import Todo from './todo';

const rootReducer = combineReducers({
  todos: Todo
});

export default rootReducer;