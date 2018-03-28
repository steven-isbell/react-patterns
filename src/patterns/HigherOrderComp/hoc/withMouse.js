import React from "react";

// Here we're creating a reusable mouse tracker by attaching state and a handler to our passed in component.

const withMouse = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

export default withMouse;
