import React from "react";
import { TableRow, TableCell } from "@mui/material";

import * as C from "./styles";

export const EditRow = ({ formData, handleChange, handleCancel }) => {
  return (
    <TableRow>
      <TableCell>
        <C.TextInput
          label="Name"
          name="name"
          variant="filled"
          size="small"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </TableCell>
      <TableCell>
        <C.TextInput
          label="Email"
          name="email"
          variant="filled"
          size="small"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </TableCell>
      <TableCell>
        <C.Actions>
          <button type="submit" title="Save">
            <C.SaveIcon />
          </button>
          <button type="button" title="Cancel" onClick={handleCancel}>
            <C.CancelIcon />
          </button>
        </C.Actions>
      </TableCell>
    </TableRow>
  );
};
