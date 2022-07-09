import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export const DeletePrompt = ({ openDialog, handleClose, handleDelete }) => {
  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle>Delete item</DialogTitle>
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
    </Dialog>
  );
};
