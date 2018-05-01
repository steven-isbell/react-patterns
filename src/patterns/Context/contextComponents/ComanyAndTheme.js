// We can combine our context just like we can combine reducers
// this allows us to share data without repetition.

import React from 'react';

import { ThemeContext, CompanyContext } from '../Context';

import { CompanyProvider } from './Company';
import { ThemeProvider } from './Theme';

const ThemeConsumer = ThemeContext.Consumer;
const CompanyConsumer = CompanyContext.Consumer;

// combined provider component

export const CombinedProviders = props => (
  <ThemeProvider>
    <CompanyProvider>{props.children}</CompanyProvider>
  </ThemeProvider>
);

// combined consumer component

const CombinedConsumers = props => (
  <ThemeConsumer>
    {themeContext => (
      <CompanyConsumer>
        {companyContext => props.children({ themeContext, companyContext })}
      </CompanyConsumer>
    )}
  </ThemeConsumer>
);

// component that consuming data from both providers

export const DivWithThemeAndCompany = () => (
  <CombinedConsumers>
    {({ themeContext, companyContext }) => (
      <div
        style={{
          background: themeContext.theme
        }}
      >
        <select onChange={e => themeContext.changeTheme(e.target.value)}>
          <option value="#787878">Dark</option>
          <option value="#F5F5F5">Light</option>
          <option value="#FFFF00">Sun</option>
          <option value="#6699FF">Ocean</option>
        </select>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {companyContext.dmTeam.map(member => (
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
  </CombinedConsumers>
);
