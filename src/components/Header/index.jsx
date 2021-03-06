import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";

import * as C from "./styles";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <C.Header>
      <C.Title>CRUD</C.Title>
      <C.Button onClick={handleChangeTheme}>
        {theme === light ? "Dark Theme" : "Light Theme"}
      </C.Button>
    </C.Header>
  );
};
