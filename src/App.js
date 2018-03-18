/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Pulls from Movie.js
import MoviesList from './MoviesList';


const Test = ({ match }) => (
  <h1>{match.params.id}</h1>
);

const App = () => (
  // JSX render method
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route path="/:id" component={Test} />
        <Route exact path="/" component={MoviesList} />
      </Switch>
    </div>
  </Router>
);


export default App;

// const Test = ({ match }) => (
//   <h1>{match.params.id}</h1>
// );
