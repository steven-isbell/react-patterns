import React, { Component } from "react";

import {
  TextHOC,
  DatesHOC,
  MouseHOC
} from "./patterns/HigherOrderComp/HigherOrderComp";

import {
  TextComponent,
  MouseComponent,
  MouseMathComponent,
  TargetComponent
} from "./patterns/RenderProps/ComponentToRender";
import AddText from "./patterns/RenderProps/render/AddText";
import WithMouse from "./patterns/RenderProps/render/WithMouse";
import TargetIdentifier from "./patterns/RenderProps/render/TargetIdentifier";

import {
  CompanyProvider,
  Company
} from "./patterns/Context/contextComponents/Company";
import {
  ThemeProvider,
  DivWithTheme
} from "./patterns/Context/contextComponents/Theme";

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
        <div style={{ border: "5px solid blue", height: "auto" }}>
          <h1>Render Props</h1>
          <AddText render={props => <TextComponent {...props} />} />
          <WithMouse render={props => <MouseComponent {...props} />} />
          <WithMouse render={props => <MouseMathComponent {...props} />} />
          <TargetIdentifier render={props => <TargetComponent {...props} />} />
        </div>
        <div style={{ border: "5px solid green" }}>
          <CompanyProvider>
            <Company />
          </CompanyProvider>
          <ThemeProvider>
            <DivWithTheme />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
