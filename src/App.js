import React, { Component } from "react";

import {
  TextHOC,
  DatesHOC,
  MouseHOC
} from "./patterns/HigherOrderComp/HigherOrderComp";

import RenderProps from "./patterns/RenderProps/RenderProps";

import Test from "./patterns/RenderProps/render/Test";

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
        <Test
          render={props => {
            return <RenderProps {...props} />;
          }}
        />
      </div>
    );
  }
}

export default App;
