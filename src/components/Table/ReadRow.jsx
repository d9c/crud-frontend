import React from "react";
import { TableRow, TableCell } from "@mui/material";

import * as C from "./styles";

export const ReadRow = ({ user, handleEdit, handleDeletePrompt }) => {
  return (
    <TableRow style={{ height: "81px" }}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <C.Actions>
          <button
            type="button"
            title="Edit"
            onClick={(e) => handleEdit(e, user)}
          >
            <C.EditIcon />
          </button>
          <button
            type="button"
            title="Delete"
            onClick={(e) => handleDeletePrompt(e, user)}
          >
            <C.DeleteIcon />
          </button>
        </C.Actions>
      </TableCell>
    </TableRow>
  );
};
