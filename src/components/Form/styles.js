import styled from "styled-components";
import { TextField, Button as MuiButton } from "@mui/material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

  width: 512px;
  padding: 40px;
`;

export const TextInput = styled(TextField)`
  && {
    background-color: ${(props) => props.theme.colors.background};
    width: 320px;

    label {
      font-family: "JetBrains Mono", sans-serif;
      color: ${(props) => props.theme.colors.text.secondary};
    }

    input {
      font-family: "JetBrains Mono", sans-serif;
      color: ${(props) => props.theme.colors.text.primary};
    }

    .MuiFilledInput-underline:before {
      border-bottom: 1px solid ${(props) => props.theme.colors.text.secondary};
    }

    .MuiFilledInput-underline:hover:before {
      border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    }
  }
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
