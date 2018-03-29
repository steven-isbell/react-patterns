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

There are three examples of Render Props in the `render/` directory.

The simplest example of render props can be found in `AddText.js`. Here we're adding the ability to track input state into our Component. We define the functionality and data we want to share amongst Components of a similar type, we pass that information into a render invocation that we receive through props, and that render invocation will return a Component that contains our data and functionality from the previously defined wrapper (eg. `AddText` is used to render our `RenderProps` Component and gives it the ability to track text inputs.)

In our second example, WithMouse, we have a Component that is tracking the location of our mouse. We want to share this functionality with other Components, so we'll utilize Render Props. Here we'll extend the functionality of the Component being rendered by passing it data via the WithMouse Component. We'll then use WithMouse's render prop to render two separate components, one that moves an image across the screen according to the mouse position, and another that does arithmetic based on the mouse position. Take a look at our `App.js` file and you'll see it rendering two instances of `WithMouse`. With mouse is then passing it's state, via the render prop into the Component we wish to render with the extended functionality.

If you look in our HigherOrderComp folder, you'll see another `withMouse` function. Nearly all Higher Order Components (HOC's) can be rewritten utilizing Render Props, but not all Render Props Components can be rewritten into HOC's. This allows us to avoid some of the decoration required with HOC's.

In our final example, TargetIdentifier, we have a Component that is being used to pass a list, and a selected item from that list, or target, to the Component to render. Right now the list is static, but it could be implemented in a way that pulls in lists (todo, grocery, etc.) from the server and allows us to target an item in that list. The implementation of the list (wether the list is strings, objects, etc) is handled in the component that will render the list. Our TargetIdentifier is strictly being used to pull in a list, and hand it to the render prop to be rendered.

Render Props is a powerful pattern in react that can help streamline our code, making it more reusable, functional, and DRY.

For more examples or to read more about Render Props, checkout the <a href="https://reactjs.org/docs/render-props.html">React Documentation on Render Props</a>.
