import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
  NavBar
} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="">
          <NavBar />
          <div className="app-h">
            <Route exact path="/" render={() => ("hello")} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
