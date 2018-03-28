// In this component we're simply building functionality that can be shared and reused amongst various components.
// This functionality can be as reusable or brittle as it needs to be; however, the goal of Render Props is to
// write components that are highly extensible to help keep our code DRY.
import React, { Component } from "react";

class WithMouse extends Component {
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
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default WithMouse;
