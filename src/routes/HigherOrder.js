import React from "react";

import {
  TextHOC,
  DatesHOC,
  MouseHOC
} from "../patterns/HigherOrderComp/HigherOrderComp";

const HOC = () => (
  <div style={{ border: "5px solid black" }}>
    <h1>Higher Order Components</h1>
    <TextHOC />
    <DatesHOC />
    <MouseHOC />
  </div>
);

export default HOC;
