import React, { Component } from "react";

class ComponentToRender extends Component {
  render() {
    return (
      <div style={this.props.style}>
        {this.props.textInput ? (
          <h3>{this.props.textInput}</h3>
        ) : (
          <h3>Render Props Example</h3>
        )}

        <input
          style={{ margin: " 20px auto", width: "100px" }}
          onChange={event => this.props.handleTextInput(event)}
        />
      </div>
    );
  }
}

export default ComponentToRender;
