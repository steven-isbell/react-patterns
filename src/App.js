import React, { Component } from "react";

import routes from "./routes/routes";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Patterns</h1>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
