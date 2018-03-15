# Higher Order Components (HOC)

### What is a Higher Order Component (HOC)?

A HOC is simply a component that wraps another component to provide or extend functionality. It improves reusability and decreases the amount of code we need to write to generate functional applications.

You may be familiar with the `connect` method from the react-redux library. It looks something like this
`connect(mapStateToProps, mapDispatchToProps)([Component Name]);`

This method takes in a couple of objects and returns a function that takes in a component who's functionality will be extended.
