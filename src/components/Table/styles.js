import styled from "styled-components";
import { Table as MuiTable, TableCell, CircularProgress } from "@mui/material";

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

export const LoadingIndicator = styled(CircularProgress)`
  && {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
