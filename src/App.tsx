import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home';
import { Child } from './containers/Child';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/child" component={Child} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
