import React from "react";

import {
  CompanyProvider,
  Company
} from "../patterns/Context/contextComponents/Company";
import {
  ThemeProvider,
  DivWithTheme
} from "../patterns/Context/contextComponents/Theme";

import {
  CombinedProviders,
  DivWithThemeAndCompany
} from "../patterns/Context/contextComponents/ComanyAndTheme";

const Context = () => (
  <div style={{ border: "5px solid green" }}>
    <CompanyProvider>
      <Company />
    </CompanyProvider>
    <ThemeProvider>
      <DivWithTheme />
    </ThemeProvider>
    <br />
    <br />
    <CombinedProviders>
      <DivWithThemeAndCompany />
    </CombinedProviders>
  </div>
);

export default Context;
