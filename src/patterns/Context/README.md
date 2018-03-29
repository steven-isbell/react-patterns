# Context API

The Context API is an existing, but experimental API that exists within React. The official React documentation for the API currently has the headline of `Why Not To Use The Context API`; it continues,

```
The vast majority of applications do not need to use context.

If you want your application to be stable, don’t use context.
It is an experimental API and it is likely to break in future releases of React.
```
With that kind of warning, it would appear that the API is rarely used; however, there are many libraries you have probbaly used that take advantage of this powerful system.

* react-redux
* react-router
* glamourous

These libraries utilize the Context API to create powerful, useful features for our react applications. This also means they absorbed the risk. With each change to the experimental API, the team managing the library would make updates, meaning we never had to worry about our code being invalidated because we weren't being exposed directly to the Context API.

Everything is changing with React 16.3 and the Context API will no longer be considered experimental. It will be a first class, ready-to-use, accessible feature of the core React Spec.

To begin using the Context API now, you'll need to ensure that you have the Alpha version of React and React-DOM installed, at least until the official 16.3 release in a few months. You can install this version by running `yarn add react@latest react-dom@latest` or, if not using yarn, `npm install react@latest react-dom@latest`. You're now ready to utilize the powerful Context API.

Context solves one of the most tedious parts of developing in React, `props drilling`. Props drilling occurs when we have a Component Tree that goes several child components deep. The child at the bottom of the tree needs access to data from somewhere up the tree, so we pass the prop from parent to child over and over again until we reach the desired component. This pattern is both tedious and error prone. A lot can happen to our code any time we are hard coding repetitious actions. The answer to this problem previously had been utilizing a state management tool like `redux` or `mobx`; in fact, this is currently the recommendation from the React Team as noted in the Context API documentation

```
If you aren’t familiar with state management libraries like Redux or MobX, don’t use context.
For many practical applications, these libraries and their React bindings are a good choice for
managing state that is relevant to many components. It is far more likely that Redux is the right
solution to your problem than that context is the right solution.
```

While Redux solves our props drilling issue by allowing us to connect individual components to a `store` and pass data directly to connected components, it is an added complexity. Redux comes with it's own API, patterns, and complexities. The Context API is an already exisiting API within the React Specification.

With all of that being said, the updated Context API is not a `Redux Killer`. Redux is an entire ecosystem that includes centralized state management, managing asychronous data, mutation tracking, single store system, state splitting, and so much more. Where the Context API will really shine is in it's ability to tackle props drilling.

To begin using the context API, you first have to create a Context object that will manage the data we want to pass to the children components. This Context object will include two properties, a `Provider` and a `Consumer`. The Provider component is used higher in the Tree and accepts a value prop (this can be anything). The Consumer component is used below the provider and consumes context from the provider. It exposes the value prop via a child Render Prop. The consumer must use a function that takes in the value from the provider and returns JSX.
```
import React from 'react';

const Context = React.createContext()
class Provider extends React.Component {
  constructor() {
    super();
    this.state = {name: 'Steven'}
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <Provider>
        <Context.Consumer>
          {context => <div>{context.name}</div>}
        </Context.Consumer>
      </Provider>
    )
  }
}
```
Above we define a class called `Provider`. This Provider class details the data we desire to send from parent to child components in our Component Tree. We define properties on state and then pass our state to the value prop on the Provider Component derived from our Context object. This action will `provide` the data that will then be `consumed` by the Context objects Consumer class in our App Component. The Consumer Component then accepts a child function (also called a render prop, or a function used by a component to render JSX) that returns JSX. The context passed to the child function is our context from the provider (our state passed to the value prop on the Context's Provider component). We can render a Consumer component within any child as long as it is beneath the Provider component in our Component Tree.

There are three examples of the Context API in action in the `contextComponents/` directory.

The first example is in our `Company.js` file. Here we're building a list of DevMountain employees. We have 3 components in our Component Tree. Company renders Organization, Organization renders Team, and Team renders a list of the team members that is received from the Context API. Team is rendering a Consumer component, the Consumer component accepts a function as its child, that function takes in the context from the Context Provider component which we then use to access the list of DevMountain Team members from the CompanyProvider. You can see in our `App.js` that the `CompanyProvider` and `Company` components are imported and we wrap the Company component in the CompanyProvider so that the Company Component Tree will have access to the CompanyProvider's data via context where we can consume it via the Consumer in the `Team` component.

The second example is in the `Theme.js` file. Here we're following a similar structure, but in addition to state, we're exposing an event handler that will update the theme on state in our Provider component. In our `App.js` we wrap the `DivWithTheme` component in the `ThemeProvider` component to expose it to the Context API. DivWithTheme is then rendered by the Consumer's child function with access to the Provider's Context which we utilize in the onChange on the `select` element.

In the final example located in `CompanyAndTheme.js`, you can see how data may be shared between Context's. By combining our Provider's and Consumer's, we're able to share their state and functionality with any component found beneath the `CombindProviders` component in our `App.js`. This is a powerful example that enables us to right highly reusable, customizable components that can be used as a standalone, or be combined with other provider and consumers to create highly dynamic UI's.

The updated Context API will be a powerful standardization the core React API. It can add flexibility, make our applications more dynamic, and slim.

To read more on the current implementation of the Context API, check out the docs <a href="https://reactjs.org/docs/context.html">here</a>.
To read more on the upcoming standardized version of the API as described above, check out this article by Kent Dodds <a href="https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b">here</a>
