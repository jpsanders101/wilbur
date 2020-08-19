import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasePage from "./BasePage";
import Home from "./Home";
import About from "./About";
import Writing from "./Writing";
import CV from "./CV";

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
        </Switch>
      </BasePage>
    </Router>
  );
}

export default App;
