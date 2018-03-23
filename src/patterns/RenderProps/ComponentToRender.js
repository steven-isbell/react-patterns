import React, { Component } from "react";

class ComponentToRender extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <p>{this.props.textInput || "Render Props Example"}</p>
        <input
          style={{ margin: " 20px auto", width: "100px" }}
          onChange={event => this.props.handleTextInput(event)}
          placeholder="Receiving functionality from wrapper"
        />
      </div>
    );
  }
}

export default ComponentToRender;
