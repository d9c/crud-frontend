import styled from "styled-components";
import {
  Table as MuiTable,
  TableRow as MuiTableRow,
  TableCell,
  TextField,
  CircularProgress,
  Dialog as MuiDialog,
} from "@mui/material";
import { Edit, Delete, Save, Cancel } from "@mui/icons-material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableBackground = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 40px;
`;

export const Table = styled(MuiTable)`
  && {
    th,
    td {
      font-family: "JetBrains Mono", sans-serif;
      color: ${(props) => props.theme.colors.text.primary};
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }

    tbody > tr:hover {
      background-color: ${(props) => props.theme.colors.border};
    }
  }
`;

export const TableHeader = styled(TableCell)`
  && {
    text-align: ${(props) => (props.actions ? "right" : "left")};
    width: ${(props) => (props.actions ? "50px" : "280px")};
  }
`;

export const TotalItems = styled.div`
  text-align: right;
  margin-top: 20px;

  span {
    font-family: "JetBrains Mono", sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const NoUsersFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: "JetBrains Mono", sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text.secondary};
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

export const EditIcon = styled(Edit)`
  && {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

export const DeleteIcon = styled(Delete)`
  && {
    color: ${(props) => props.theme.colors.text.primary};
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

export const TextInput = styled(TextField)`
  && {
    background-color: ${(props) => props.theme.colors.background};

    label,
    input {
      font-family: "JetBrains Mono", sans-serif;
      color: ${(props) => props.theme.colors.text.primary};
    }

    .MuiFilledInput-underline:before {
      border-bottom: 1px solid ${(props) => props.theme.colors.text.primary};
    }

    .MuiFilledInput-underline:hover:before {
      border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const LoadingIndicator = styled(CircularProgress)`
  && {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const TableRow = styled(MuiTableRow)`
  && {
    height: 81px;
  }
`;

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
