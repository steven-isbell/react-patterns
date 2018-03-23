import React, { Component } from "react";
import extendComponent from "./hoc/extendComponent";
import formatDates from "./hoc/acceptConfigAndComp";
import withMouse from "./hoc/withMouse";

class HigherOrderText extends Component {
  render() {
    return (
      <div style={this.props.styleProp}>
        <input
          onChange={event => this.props.handleTextChange(event.target.value)}
          style={{ width: "100%" }}
          placeholder="Receiving props from hoc"
        />
        <p>{this.props.textInput || "HOC Example"}</p>
      </div>
    );
  }
}

export const TextHOC = extendComponent(HigherOrderText);

class HigherOrderDates extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        {Object.values(this.props).map(
          (val, i, arr) =>
            i !== arr.length - 1 && <h2 key={`${val}${i}`}>{val}</h2>
        )}
      </div>
    );
  }
}

export const DatesHOC = formatDates(
  {
    birthday: "2017-07-10",
    anniversary: 1515774685,
    kidBirthday: "28-Mar-2017",
    otherDate: "02/08/2018"
  },
  "YYYY-MM-DD"
)(HigherOrderDates);

class HigherOrderMouse extends Component {
  render() {
    // Instead of maintaining our own state,
    // we get the mouse position as a prop!
    const { x, y } = this.props.mouse;

    return (
      <div>
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      </div>
    );
  }
}

export const MouseHOC = withMouse(HigherOrderMouse);
