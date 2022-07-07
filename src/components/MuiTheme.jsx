import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const MuiTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5a7896",
      },
    },
    typography: {
      fontFamily: "JetBrains Mono",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
