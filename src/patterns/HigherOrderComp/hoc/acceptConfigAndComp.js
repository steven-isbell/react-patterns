import React, { Component } from "react";
import moment from "moment";

// Here we have a HOC that takes in dates and converts them to the same
// format before passing them along to the component.
// We could use this to maintain date formats across a calendar or scheduling service

const formatDates = (dateProps, format = "MM-DD-YYYY") => {
  let newProps = {};
  for (let key in dateProps) {
    newProps[key] = moment(dateProps[key]).format(format);
  }
  newProps.message = `Formatted as ${format}`;
  return WrappedComponent =>
    class extends Component {
      render() {
        return <WrappedComponent {...newProps} />;
      }
    };
};

export default formatDates;
