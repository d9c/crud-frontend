import React from "react";

import { Header } from "./components/Header";
import { MuiTheme } from "./components/MuiTheme";
import { MuiTabs } from "./components/MuiTabs";

import { SnackbarContextProvider } from "./contexts/SnackbarContext";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <MuiTheme>
        <SnackbarContextProvider>
          <MuiTabs />
        </SnackbarContextProvider>
      </MuiTheme>
    </div>
  );
};
