# Render Props

In React, Render Prop's is a way to share code between Component's using a prop, often called `render`, whose value is a function. This function generally returns a React Element. This pattern allows us to dynamically declare content to render, and what state, or data, it has access to.

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

The Render Props pattern provides a way to reuse and extend functiaonly in a clean, succinct way. In the example above the React Router team is able to extend the functionality of the Route Component by explicitily telling it what elements to render and what data to provide.

For more examples or to read more about Render Props, checkout the <a href="https://reactjs.org/docs/render-props.html">React Documentation on Render Props's</a>.
