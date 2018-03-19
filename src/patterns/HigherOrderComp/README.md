# Higher Order Components (HOC)

### What is a Higher Order Component (HOC)?

A HOC is a component that wraps another component to provide or extend functionality. It improves reusability and decreases the amount of code we need to write to generate functional applications.

You may be familiar with the `connect` method from the react-redux library. It looks something like this
`connect(mapStateToProps, mapDispatchToProps)([Component Name]);`

This method takes in a couple of objects and returns a function that takes in a component who's functionality will be extended by the passed in objects.

If you've used object factories before then this pattern will be familiar.

```
function carFactory(make, model, year) {
    // here we can do logic to dictate micro changes to each car object
    return {
        make: make,
        model: model,
        year: year
    }
}
```

Above, we're using a function to generate a potentially infinite number of car objects. This allows us to define one function and reuse it to define multiple objects. In a similar way, we can use HOC's to define one function and generate many objects (ES6 Class Based Components).

There are three examples in the `hoc/` directory.

`acceptConfigAndComp.js` is a HOC that takes in a configuration object and returns another function that accepts a component to apply the configurations to. This HOC in particular takes in a list of dates and standardizes them using `moment` before passing the dates along to the Component.

`extendComponent.js` is a HOC that takes in a Component and renders it inside another Component. Here we can add lifecycle hooks to a functional Component, we can add methods and state and adjust those dynamically before handing them off to the WrappedComponent. This allows us to add similar functionalities to many components without having to copy/paste or rewrite small bits of functionality that is similar in nature.

`withMouse.js` is a simple HOC that was originally demonstrated by Michael Jackson (the developer, not the pop icon) in a blog post <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">here</a>. Here he takes mouse movements and uses the HOC to decorate any passed in component with the state and functionality needed to track mouse movement, similar to what occurs in our `extendComponent.js` HOC.

Higher Order Components are a powerful way to utilize react's compositional nature to build reusable, extensible component wrappers.

For more examples or to read more about Higher Order Components, checkout the <a href="https://reactjs.org/docs/higher-order-components.html">React Documentation on HOC's</a>.

Note: HOC's can often be rewritten utilizing Render Props and in that regard becomes a stylistic decision.
