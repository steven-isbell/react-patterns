import React, { Component } from "react";

export class TextComponentToRender extends Component {
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

export class MouseComponentToRender extends Component {
  render() {
    return (
      <div style={{ height: "200px", position: "relative" }}>
        <h1>
          Our plane is being moved across the container based on the mouse
          position from the WithMouse Component that is rendering our
          MouseComponentToRender Component within its render prop.
        </h1>
        <img
          src="https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/352/vRIW46-TopView.png"
          style={{
            position: "absolute",
            top: this.props.y - 400,
            left: this.props.x,
            width: "50px",
            height: "50px"
          }}
          alt="plane"
        />
      </div>
    );
  }
}

export class MouseMathComponentToRender extends Component {
  render() {
    const { x, y } = this.props;
    return (
      <div style={{ height: "400px" }}>
        <h1>
          Here we're using the Mouse functionality and doing math based on the
          mouse movements
        </h1>
        <h2>
          Notice that once we leave the container above, our plane image stops
          moving. We've created two seperate environments, capturing mouse
          movement, utilizing our reusable state and functionality from our
          WithMouse Component
        </h2>
        <p>
          Addition: {x} + {y} = {x + y}
        </p>
        <p>
          Subtraction: {x} - {y} = {x - y}
        </p>
        <p>
          Multiplication: {x} * {y} = {x * y}
        </p>
        <p>
          Division: {x} / {y} = {x / y}
        </p>
      </div>
    );
  }
}
