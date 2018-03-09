import {
    CHANGE_TODO_TEXT,
    SUBMIT_TODO,
 } from "../constants";

export const changeTodoText = (text) => {
    console.log('ChangeTodoAction');
    return {
        type: CHANGE_TODO_TEXT,
        payload: text,
    };
};

export const submitTodo = (text) => {
    return {
        type: SUBMIT_TODO,
        payload: text,
    };
};