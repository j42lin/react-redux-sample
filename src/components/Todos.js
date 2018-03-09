import React from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';

const Todos = ({todoText, todos, changeTodoText, submitTodo, deleteTodo}) => {
  console.log('Todo Text', todoText);
  console.log('Todo list', todos);
  return (
    <Grid>
        <FormGroup controlId="formControlsTextarea">
        <FormControl
            componentClass="textarea"
            value={todoText}
            onChange={ (e) => { changeTodoText(e.target.value); } }
        />
        <Button onClick={() => { submitTodo(todoText); }}>Add</Button>
        </FormGroup>
        <div>
          {
            todos.map((todo, index) => {
              return (
                <Alert key={index}>
                  <p>{todo}</p>
                  <Button bsStyle="danger" onClick={() => { deleteTodo(index); }}>Delete</Button>
                </Alert>
              );
            })
          }
        </div>
    </Grid>
  );
};

export default Todos;
  