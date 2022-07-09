import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

export const ReadRow = ({ user, handleEdit, handleDeletePrompt }) => {
  return (
    <TableRow style={{ height: "81px" }}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <div className="actions">
          <button
            type="button"
            title="Edit"
            onClick={(e) => handleEdit(e, user)}
          >
            <EditIcon style={{ color: "#787878" }} />
          </button>
          <button
            type="button"
            title="Delete"
            onClick={(e) => handleDeletePrompt(e, user)}
          >
            <DeleteIcon style={{ color: "#787878" }} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};
