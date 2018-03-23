import React, { Component } from "react";

import {
  TextHOC,
  DatesHOC,
  MouseHOC
} from "./patterns/HigherOrderComp/HigherOrderComp";

import ComponentToRender from "./patterns/RenderProps/ComponentToRender";
import AddText from "./patterns/RenderProps/render/AddText";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* Higher Order Components Modules */}
        <div style={{ border: "5px solid black" }}>
          <h1>Higher Order Components</h1>
          <TextHOC />
          <DatesHOC />
          <MouseHOC />
        </div>
        {/* Render Props Module */}
        <div style={{ border: "5px solid blue" }}>
          <h1>Render Props</h1>
          <AddText render={props => <ComponentToRender {...props} />} />
        </div>
      </div>
    );
  }
}

export default App;
