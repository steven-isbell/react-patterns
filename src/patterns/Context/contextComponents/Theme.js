import React, { Component } from "react";

import { ThemeContext } from "../Context";

export class ThemeProvider extends Component {
  constructor() {
    super();

    this.state = {
      theme: "#787878"
    };

    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
  handleThemeChange(theme) {
    this.setState({ theme });
  }
  render() {
    const data = {
      ...this.state,
      changeTheme: this.handleThemeChange
    };
    return (
      <ThemeContext.Provider value={data}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const DivWithTheme = () => (
  <ThemeContext.Consumer>
    {context => (
      <div
        style={{
          background: context.theme,
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <select onChange={e => context.changeTheme(e.target.value)}>
          <option value="#787878">Dark</option>
          <option value="#F5F5F5">Light</option>
          <option value="#FFFF00">Sun</option>
          <option value="#6699FF">Ocean</option>
        </select>
      </div>
    )}
  </ThemeContext.Consumer>
);
