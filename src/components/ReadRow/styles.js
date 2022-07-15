import styled from "styled-components";
import { TableRow as MuiTableRow } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export const TableRow = styled(MuiTableRow)`
  && {
    height: 81px;
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
