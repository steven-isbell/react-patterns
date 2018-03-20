import React, { Component } from "react";

// In this component we're defining state to track and handler to interact with that state.
// We then bundle that data, functionality, and any other content we need (eg. the style prop)
// into a variable called decorate. When we invoke the render prop, we'll pass in our extended functionality
// which will be added onto the Component we return from our `this.props.render` invocation.

// This syntax allows us to define reusable, compact chucnks of data and functionality that can
// be shared with a potentially limitless number of Components.

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
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

export default AddText;
