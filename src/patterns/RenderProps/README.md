# Render Props

In React, Render Props is a way to share code between Components using a prop, often called `render`, whose value is a function. This function generally returns a React Element. This pattern allows us to dynamically declare content to render, and what state, or data, it has access to.

A commonly used library that takes advantage of the Render Props pattern is the React Router library.

```
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';

const newProps = {
    user: { name: 'John', age: 25 }
}

<Switch>
    <Route exact path="/" component={Home}/>
    {/*
        Here the route takes a `Render Prop`
        which allows us to extend the functionality
        of our component before it's rendered.
    */}
    <Route path="/profile" render={
        (props) => <Profile {...props} {...newProps} />
    }/>
</Switch>
```

The Render Props pattern provides a way to reuse and extend functionality in a clean, succinct way. In the example above the React Router team is able to extend the functionality of the Route Component by explicitly telling it what elements to render and what data to provide.

There are three example of Render Props in the `render/` directory.

The simplest example of render props can be found in `AddText.js`. Here we're adding the ability to track input state into our Component. We define the functionality and data we want to share amongst Components of a similar type, we pass that information into a render invocation that we receive through props, and that render invocation will return a Component that contains our data and functionality from the previously defined wrapper (eg. `AddText` is used to render our `RenderProps` Component and gives it the ability to track text inputs.)

In our second example, WithMouse, we have a Component that is tracking the location of our mouse. We want to share this functionality with other Components, so we'll utilize Render Props. Here we'll extend the functionality of the Component being rendered by passing it data via the WithMouse Component. We can utilize this Component extension to fire off events based on the mouse location.

If you look in our HigherOrderComp folder, you'll see another `withMouse` function. Nearly all Higher Order Components (HOC's) can be rewritten utilizing Render Props, but not all Render Props Components can be rewritten into HOC's. This allows us to avoid some of the decoration required with HOC's.

For more examples or to read more about Render Props, checkout the <a href="https://reactjs.org/docs/render-props.html">React Documentation on Render Props</a>.
