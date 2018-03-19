import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "fasdfasdf"
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }
  handleTextInput(event) {
    this.setState({ textInput: event.target.value });
  }
  render() {
    const decorate = {
      ...this.state,
      handleTextInput: this.handleTextInput,
      style: { display: "flex", flexDirection: "column" }
    };
    return <div>{this.props.render(decorate)}</div>;
  }
}

export default Test;
