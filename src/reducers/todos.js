import _pullAt from 'lodash/pullAt';
import {
    SUBMIT_TODO,
    DELETE_TODO,
} from '../constants';


const todos = (state = [], action) => {
    switch(action.type) {
        case SUBMIT_TODO:
            return [...state, action.payload];

        case DELETE_TODO:
            const todosCopy = state.slice(); // make a new copy
            _pullAt(todosCopy, action.payload); // delete todo at this index
            return todosCopy;

        default:
            return state;
    }
};

export default todos;
