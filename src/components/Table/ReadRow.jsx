import React from "react";
import { TableCell } from "@mui/material";

import * as C from "./styles";

export const ReadRow = ({ user, handleEdit, handleDeletePrompt }) => {
  return (
    <C.TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <C.Actions>
          <button type="button" title="Edit" onClick={handleEdit}>
            <C.EditIcon />
          </button>
          <button type="button" title="Delete" onClick={handleDeletePrompt}>
            <C.DeleteIcon />
          </button>
        </C.Actions>
      </TableCell>
    </C.TableRow>
  );
};
