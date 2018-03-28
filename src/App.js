import React, { Component } from "react";

import {
  TextHOC,
  DatesHOC,
  MouseHOC
} from "./patterns/HigherOrderComp/HigherOrderComp";

import {
  TextComponentToRender,
  MouseComponentToRender,
  MouseMathComponentToRender
} from "./patterns/RenderProps/ComponentToRender";
import AddText from "./patterns/RenderProps/render/AddText";

import logo from "./logo.svg";
import "./App.css";
import WithMouse from "./patterns/RenderProps/render/WithMouse";

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
        <div style={{ border: "5px solid blue", height: "auto" }}>
          <h1>Render Props</h1>
          <AddText render={props => <TextComponentToRender {...props} />} />
          <WithMouse render={props => <MouseComponentToRender {...props} />} />
          <WithMouse
            render={props => <MouseMathComponentToRender {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
