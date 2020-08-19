import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BasePage from './BasePage';
import Home from './Home';
import About from './About';
import Writing from './Writing';
import CV from './CV';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
    <BasePage>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/writing">
          <Writing />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BasePage>
    </Router>
  );
}

export default App;
