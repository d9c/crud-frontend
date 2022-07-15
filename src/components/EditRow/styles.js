import styled from "styled-components";
import { TextField } from "@mui/material";
import { Save, Cancel } from "@mui/icons-material";

export const TextInput = styled(TextField)`
  && {
    background-color: ${(props) => props.theme.colors.background};

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

export const Actions = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;

export const SaveIcon = styled(Save)`
  && {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

export const CancelIcon = styled(Cancel)`
  && {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
