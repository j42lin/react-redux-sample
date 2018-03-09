import { CHANGE_TODO_TEXT } from "../constants";

export const changeTodoText = (text) => {
    console.log('ChangeTodoAction');
    return {
        type: CHANGE_TODO_TEXT,
        payload: text,
    };
};
