import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black"
};

const Landing = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h1>Select a Link below to view the output of the code for each module</h1>
    <Link style={linkStyle} to="/context">
      Context
    </Link>
    <Link style={linkStyle} to="/renderprops">
      Render Props
    </Link>
    <Link style={linkStyle} to="/hoc">
      Higher Order Components
    </Link>
    {children}
  </div>
);

export default Landing;
