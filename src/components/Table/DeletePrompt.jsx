import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import * as C from "./styles";

export const DeletePrompt = ({ open, handleClose, handleDelete }) => {
  return (
    <C.Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete item?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Once deleted, this item cannot be recovered.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </C.Dialog>
  );
};
