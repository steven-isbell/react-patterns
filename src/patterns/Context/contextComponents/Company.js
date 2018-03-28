import React, { Component } from "react";

import { CompanyContext } from "../Context";

export class CompanyProvider extends Component {
  constructor() {
    super();

    this.state = {
      dmTeam: [
        { name: "Mark Hideo", position: "President" },
        { name: "Tim Newhard", position: "VP of Education" },
        { name: "Steven Isbell", position: "Lead Instructor" },
        { name: "Shea Close", position: "Instructor" },
        { name: "Erik Golden", position: "Lead Mentor" }
      ]
    };
  }
  render() {
    return (
      <CompanyContext.Provider value={this.state}>
        {this.props.children}
      </CompanyContext.Provider>
    );
  }
}

export const Company = () => <Organization />;

const Organization = () => <Team />;

const Team = () => (
  <CompanyContext.Consumer>
    {context => (
      <div>
        <h1>The DevMountain Team:</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {context.dmTeam.map(member => (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px"
              }}
            >
              <p>{member.name}</p>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </CompanyContext.Consumer>
);
