import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 50px;
  margin-bottom: 50px;
  padding-inline: 30px;
`;

export const Title = styled.span`
  font-family: "JetBrains Mono", sans-serif;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Button = styled(MuiButton)`
  && {
    font-family: "JetBrains Mono", sans-serif;
    color: #ffffff;
    text-transform: none;
    background-color: ${(props) => props.theme.colors.secondary};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      filter: brightness(85%);
    }
  }
`;
