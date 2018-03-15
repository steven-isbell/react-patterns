import React, { Component } from "react";
import moment from "moment";

// Here we have a HOC that takes in dates and converts them to the same
// format before passing them along to the component.
// We could use this to maintain date formats across a calendar or scheduling service

const formatDates = dateProps => {
  let newProps = {};
  if (Object.hasOwnProperty("format")) {
    for (let key in dateProps) {
      if (key !== "format")
        newProps[key] = moment(dateProps[key]).format(dateProps["format"]);
    }
    newProps.message = `Formatted as ${dateProps.format}`;
  } else {
    for (let key in dateProps) {
      newProps[key] = moment(dateProps[key]).format("MM/DD/YYYY");
    }
    newProps.message = "No format provided, default format applied";
  }
  return WrappedComponent =>
    class extends Component {
      render() {
        return <WrappedComponent {...newProps} />;
      }
    };
};

export default formatDates;
