import React from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';

const Todo = ({todoText, changeTodoText, submitTodo}) => {
  return (
    <FormGroup controlId="formControlsTextarea">
    <FormControl
        componentClass="textarea"
        value={todoText}
        onChange={ (e) => { changeTodoText(e.target.value); } }
    />
    <Button onClick={() => { submitTodo(todoText); }}>Add</Button>
    </FormGroup>
  )
};

export default Todo;
