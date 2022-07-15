import styled from "styled-components";
import { Dialog as MuiDialog } from "@mui/material";

export const Dialog = styled(MuiDialog)`
  && {
    .MuiPaper-root {
      background-color: ${(props) => props.theme.colors.primary};

      h2,
      p,
      button {
        font-family: "JetBrains Mono", sans-serif;
        color: ${(props) => props.theme.colors.text.primary};
      }

      button:hover {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;
