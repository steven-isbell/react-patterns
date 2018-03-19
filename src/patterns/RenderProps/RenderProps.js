import React, { Component } from "react";

class RenderProps extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <input onChange={event => this.props.handleTextInput(event)} />
        {this.props.textInput}
      </div>
    );
  }
}

export default RenderProps;
