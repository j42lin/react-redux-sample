import React, { Component } from 'react';
import { Button, Alert, Grid, FormGroup, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

// Todo component
const Todo = (props) => {
  // console.log('this is todo', props.todo);
  return (
    <Alert bsStyle="info" key={props.todo.id}>
      <h3>ID: {props.todo.id}</h3>
      <p>
        {props.todo.note}
      </p>
      <Button bsStyle="danger" onClick={props.remove}>Delete</Button>
    </Alert>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    
    const list = this.prepopulateNotes();

    this.state = {
      id: 100,
      note: '',
      list: list,
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  prepopulateNotes() {
    const list = {};

    list[0] = { id: 0, note: 'This is first note' };
    list[1] = { id: 1, note: 'This is second note'};
    list[2] = { id: 2, note: 'THis is last note'};

    return list;
  }

  // This handle event when text is entered
  handleNoteChange(event) {
    this.setState({note: event.target.value});
  }

  // add todo in the list
  addTodo() {
    const list = this.state.list;
    const id = this.state.id + 1;

    list[id] = {id: id, note: this.state.note};
    this.setState({
      list,
      id,
      note: '',
    });
  }

  // check id, if valid, take the todo off list
  deleteTodo(id) {
    const list = this.state.list;

    if (list.hasOwnProperty(id)) {
      delete list[id];
      this.setState({ list });
    }
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
            <FormControl componentClass="textarea" value={this.state.note} onChange={this.handleNoteChange} />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.addTodo}>Add</Button>
          <br />
          <br />
          <div>
            {
              Object.keys(this.state.list).map((id) => {
                // console.log('map this id', this.state.list[id]);
                return (<Todo todo={this.state.list[id]} remove={() => { this.deleteTodo(id); }}/>);
              })
            }
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
