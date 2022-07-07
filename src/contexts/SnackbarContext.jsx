import React, { createContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export const SnackbarContext = createContext({});

export const SnackbarContextProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    } else {
      setSnackbar({ open: false, message: "" });
    }
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbar.open}
        onClose={handleClose}
        message={snackbar.message}
        autoHideDuration={2000}
      />
    </SnackbarContext.Provider>
  );
};
