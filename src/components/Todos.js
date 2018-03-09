import React from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';

const Todos = ({todoText, changeTodoText}) => {
  return (
    <Grid>
        <FormGroup controlId="formControlsTextarea">
        <FormControl
            componentClass="textarea"
            value={todoText}
            onChange={ (e) => { changeTodoText(e.target.value); } }
        />
        </FormGroup>
    </Grid>
  );
};

export default Todos;
  