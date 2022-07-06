import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ReadRow = ({ user, handleEdit, handlePromptDelete }) => {
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
            onClick={(e) => handlePromptDelete(e, user)}
          >
            <DeleteIcon style={{ color: "#787878" }} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};
