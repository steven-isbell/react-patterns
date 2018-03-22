import React, { Component } from "react";

import {
  TextHOC,
  DatesHOC,
  MouseHOC
} from "./patterns/HigherOrderComp/HigherOrderComp";

import ComponentToRender from "./patterns/ComponentToRender/ComponentToRender";
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
        <TextHOC />
        <DatesHOC />
        <MouseHOC />
        {/* Render Props Module */}
        <AddText render={props => <ComponentToRender {...props} />} />
      </div>
    );
  }
}

export default App;
