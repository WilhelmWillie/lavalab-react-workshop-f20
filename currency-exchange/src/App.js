import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Convert from './views/Convert';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/:currency(usd|jpy|gbp|inr)">
          <Convert />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
