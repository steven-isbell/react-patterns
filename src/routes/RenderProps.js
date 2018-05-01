import React from 'react';

import {
  TextComponent,
  MouseComponent,
  MouseMathComponent,
  TargetComponent
} from '../patterns/RenderProps/ComponentToRender';
import AddText from '../patterns/RenderProps/render/AddText';
import WithMouse from '../patterns/RenderProps/render/WithMouse';
import TargetIdentifier from '../patterns/RenderProps/render/TargetIdentifier';

// here we can pass additional props data to and render props component

const morePropsToPassToRenderComponent = {
  style: {
    color: 'blue',
    fontFamily: 'arial'
  },
  data: ['some piece of important data']
};

const RP = () => (
  <div style={{ border: '5px solid blue', height: 'auto' }}>
    <h1>Render Props</h1>
    <AddText
      render={props => (
        <TextComponent {...props} {...morePropsToPassToRenderComponent} />
      )}
    />
    <WithMouse render={props => <MouseComponent {...props} />} />
    <WithMouse
      render={props => (
        <MouseMathComponent {...props} {...morePropsToPassToRenderComponent} />
      )}
    />
    <TargetIdentifier render={props => <TargetComponent {...props} />} />
  </div>
);

export default RP;
