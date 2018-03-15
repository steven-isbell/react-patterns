import React, { Component } from "react";
import extendComponent from "./hoc/extendComponent";

class HigherOrder extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input
          onChange={event => this.props.handleTextChange(event.target.value)}
        />
        <div style={this.props.styleProp}>
          <p>{this.props.textInput}</p>
        </div>
      </div>
    );
  }
}

export default extendComponent(HigherOrder);
