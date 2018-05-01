import { createContext } from 'react';

// Here we're creating each context object. This will provide with
// A Provider and a Consumer
// You can think of these like individual reducers in redux

export const CompanyContext = createContext();

export const ThemeContext = createContext();
