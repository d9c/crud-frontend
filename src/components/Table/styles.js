import styled from "styled-components";
import {
  Table as MuiTable,
  TableRow as MuiTableRow,
  TableCell,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Edit, Delete, Save, Cancel } from "@mui/icons-material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableBackground = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 40px;
`;

export const Table = styled(MuiTable)`
  tbody > tr:hover {
    background-color: #e1e1e1;
    transition: 50ms ease-in-out;
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
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const NoUsersFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: "JetBrains Mono", sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
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
  color: #787878;
`;

export const DeleteIcon = styled(Delete)`
  color: #787878;
`;

export const SaveIcon = styled(Save)`
  color: #787878;
`;

export const CancelIcon = styled(Cancel)`
  color: #787878;
`;

export const TextInput = styled(TextField)`
  background-color: #ffffff;
`;

export const LoadingIndicator = styled(CircularProgress)`
  && {
    color: #5a7896;
  }
`;

export const TableRow = styled(MuiTableRow)`
  height: 81px;
`;
