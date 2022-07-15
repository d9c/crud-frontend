import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";

import { ThemeContext } from "./contexts/ThemeContext";
import { SnackbarContextProvider } from "./contexts/SnackbarContext";

import GlobalStyle from "./styles/global";

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SnackbarContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Tabs />
        <GlobalStyle />
      </ThemeProvider>
    </SnackbarContextProvider>
  );
};
