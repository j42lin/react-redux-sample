import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from 'react-bootstrap';

import TodoForm from './containers/TodoForm';
import TodoList from './containers/TodoList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to todo list</h1>
      </header>
      <br />
      <Grid>
        <TodoForm />
        <TodoList />
      </Grid>
    </div>
  );
};

export default App;
