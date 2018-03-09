import { CHANGE_TODO_TEXT } from "../constants";

export const changeTodoText = (text) => {
    return {
        type: CHANGE_TODO_TEXT,
        payload: text,
    };
};
