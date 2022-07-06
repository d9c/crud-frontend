import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const MuiTheme = ({ children }) => {
  const theme = createTheme({
    typography: { fontFamily: "JetBrains Mono" },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
