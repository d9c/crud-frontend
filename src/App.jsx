import React from "react";

import { Header } from "./components/Header";
import { MuiTheme } from "./components/MuiTheme";
import { MuiTabs } from "./components/MuiTabs";

export const App = () => {
  return (
    <div className="app">
      <MuiTheme>
        <Header />
        <MuiTabs />
      </MuiTheme>
    </div>
  );
};
