import React, { Component } from "react";
import extendComponent from "./hoc/extendComponent";
import formatDates from "./hoc/acceptConfigAndComp";

// class HigherOrder extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           onChange={event => this.props.handleTextChange(event.target.value)}
//         />
//         <div style={this.props.styleProp}>
//           <p>{this.props.textInput}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default extendComponent(HigherOrder);

class HigherOrder extends Component {
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

export default formatDates({
  birthday: "2017-07-10",
  anniversary: 1515774685,
  kidBirthday: "28-Mar-2017",
  otherDate: "02/08/2018"
})(HigherOrder);
