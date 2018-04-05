import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import HOC from "./HigherOrder";
import RP from "./RenderProps";
import Context from "./Context";
import Landing from "./Landing";

export default (
  <Fragment>
    <Route exact path="/" component={Landing} />
    <Route
      path="/hoc"
      render={() => (
        <Landing>
          <HOC />
        </Landing>
      )}
    />
    <Route
      path="/renderprops"
      render={() => (
        <Landing>
          <RP />
        </Landing>
      )}
    />
    <Route
      path="/context"
      render={() => (
        <Landing>
          <Context />
        </Landing>
      )}
    />
  </Fragment>
);
