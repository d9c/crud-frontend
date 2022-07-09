import React from "react";
import { TableRow, TableCell, TextField } from "@mui/material";
import { Save as SaveIcon, Cancel as CancelIcon } from "@mui/icons-material";

export const EditRow = ({ formData, handleChange, handleCancel }) => {
  return (
    <TableRow>
      <TableCell>
        <TextField
          label="Name"
          name="name"
          variant="filled"
          size="small"
          style={{ backgroundColor: "#ffffff" }}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Email"
          name="email"
          variant="filled"
          size="small"
          style={{ backgroundColor: "#ffffff" }}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </TableCell>
      <TableCell>
        <div className="actions">
          <button type="submit" title="Save">
            <SaveIcon style={{ color: "#787878" }} />
          </button>
          <button type="button" title="Cancel" onClick={handleCancel}>
            <CancelIcon style={{ color: "#787878" }} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};
