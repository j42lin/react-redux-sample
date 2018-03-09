import React, { Component } from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';

class TodoList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        todoText: '',
      };
    }
  
    // This handle event when text is entered
    handleNoteChange(value) {
      console.log('text changed', value);
      this.setState({todoText: value});
    }
  
    render() {
      return (
        <Grid>
            <FormGroup controlId="formControlsTextarea">
            <FormControl
                componentClass="textarea"
                value={this.state.todoText}
                onChange={ (e) => { this.handleNoteChange(e.target.value); } }
            />
            </FormGroup>
        </Grid>
      );
    }
  }
  
  export default TodoList;
  