import {
    CHANGE_TODO_TEXT,
} from '../constants';

const todo = (state = '', action) => {
    switch(action.type) {
        case CHANGE_TODO_TEXT:
            return action.payload;

        default:
            return state;
    }
};

export default todo;
