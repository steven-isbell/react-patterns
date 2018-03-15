import React, { Component } from "react";

const extendComponent = WrappedComponent => {
  // The arguments can be a config object (style configuration, data to pass, etc) and a component to wrap
  // In here we can extend the functionality of our component to include additional props,
  // hook into state, generate methods, generate a list in a container, style components,
  // provide lifecycle hooks to functional components, etc.

  // The goal of this wrapper to make code as reusable as necessary

  class ExtendedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        textInput: ""
      };
      this.handleTextInput = this.handleTextInput.bind(this);
    }

    handleTextInput(value) {
      this.setState({ textInput: value });
    }

    render() {
      const addedProps = {
        someNewProp: "This is a new prop",
        styleProp: {
          color: "blue",
          height: "150px",
          overflow: "scroll",
          width: "200px",
          margin: "50px auto"
        },
        textInput: this.state.textInput,
        handleTextChange: this.handleTextInput
      };
      return (
        <div>
          <WrappedComponent {...this.props} {...addedProps} />
        </div>
      );
    }
  }
  return ExtendedComponent;
};

export default extendComponent;
