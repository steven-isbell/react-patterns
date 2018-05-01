import React, { Component } from 'react';

import { CompanyContext } from '../Context';

const { Provider, Consumer } = CompanyContext;

// Our provider component that is 'providing' the data
// to be consumed
export class CompanyProvider extends Component {
  constructor() {
    super();

    this.state = {
      dmTeam: [
        { name: 'Mark Hideo', position: 'President' },
        { name: 'Tim Newhard', position: 'VP of Education' },
        { name: 'Steven Isbell', position: 'Lead Instructor' },
        { name: 'Shea Close', position: 'Instructor' },
        { name: 'Erik Golden', position: 'Lead Mentor' }
      ]
    };
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

// a component tree that shows that no matter how many components
// deep our tree goes, we can pass data via the consumer to just the
// components that need it, no props drilling
export const Company = () => <Organization />;

const Organization = () => <Team />;

const Team = () => (
  <Consumer>
    {context => (
      <div>
        <h1>The DevMountain Team:</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {context.dmTeam.map(member => (
            <div
              style={{
                border: '1px solid black',
                margin: '10px',
                padding: '10px'
              }}
            >
              <p>{member.name}</p>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </Consumer>
);
