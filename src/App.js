import React, { Component } from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to todo list</h1>
        </header>
        <br />
        <Grid>
          <FormGroup controlId="formControlsTextarea">
            <FormControl
              componentClass="textarea"
              value={this.state.todoText}
              onChange={ (e) => { this.handleNoteChange(e.target.value); } }
            />
          </FormGroup>
        </Grid>
      </div>
    );
  }
}

export default App;
