import React from "react";

import {
  TextComponent,
  MouseComponent,
  MouseMathComponent,
  TargetComponent
} from "../patterns/RenderProps/ComponentToRender";
import AddText from "../patterns/RenderProps/render/AddText";
import WithMouse from "../patterns/RenderProps/render/WithMouse";
import TargetIdentifier from "../patterns/RenderProps/render/TargetIdentifier";

const RP = () => (
  <div style={{ border: "5px solid blue", height: "auto" }}>
    <h1>Render Props</h1>
    <AddText render={props => <TextComponent {...props} />} />
    <WithMouse render={props => <MouseComponent {...props} />} />
    <WithMouse render={props => <MouseMathComponent {...props} />} />
    <TargetIdentifier render={props => <TargetComponent {...props} />} />
  </div>
);

export default RP;
