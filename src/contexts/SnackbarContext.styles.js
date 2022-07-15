import styled from "styled-components";
import { Snackbar as MuiSnackbar } from "@mui/material";

export const Snackbar = styled(MuiSnackbar)`
  && {
    .MuiSnackbarContent-message {
      font-family: "JetBrains Mono", sans-serif;
    }
  }
`;
