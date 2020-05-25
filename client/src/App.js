import React from 'react';
import {Router} from '@reach/router';
import Header from './components/Header';
import AuthorList from './views/AuthorList'
import {Paper} from '@material-ui/core';
import './App.css';
import AuthorEdit from './views/AuthorEdit';
import AuthorAdd from './views/AuthorAdd';

function App() {
  return (
    <div className="App">
      <Paper elevation={3}>
        <Header/>
        <Router>
          <AuthorList path="/authors"/>
          <AuthorEdit path="/authors/:id"/>
          <AuthorAdd path="/authors/add"/>
        </Router>
      </Paper>
      
    </div>
  );
}

export default App;
