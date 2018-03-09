import React from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';

const Todos = ({todos, deleteTodo}) => {
  return (
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
  );
};

export default Todos;
  