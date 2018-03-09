import { CHANGE_TODO_TEXT } from '../constants';

const initialState = {
    todoText: ''
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TODO_TEXT:
            return Object.assign({}, state, {todoText: action.payload});
        
        default:
            return state;
    }
};

export default rootReducer;
