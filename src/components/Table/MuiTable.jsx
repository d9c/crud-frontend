import React, { useContext, useState, useEffect, Fragment } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { EditRow } from "./EditRow";
import { ReadRow } from "./ReadRow";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import { apiRequest } from "../../helpers/api-request";

import { updateUser, deleteUser } from "../../actions/userActions";

import "../../styles/table.scss";

export const MuiTable = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [apiData, setApiData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    apiRequest("https://d9c-crud.herokuapp.com/users").then((data) =>
      setApiData(data)
    );
  }, [editId, deleteId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEdit = (e, user) => {
    setEditId(user._id);

    const newFormData = {
      name: user.name,
      email: user.email,
    };

    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = { ...formData };
    await updateUser(updatedUser, editId);

    setSnackbar({
      open: true,
      message: "User successfully updated",
    });

    setEditId(null);
  };

  const handlePromptDelete = (e, user) => {
    setDeleteId(user._id);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setDeleteId(null);
    setOpenDialog(false);
  };

  const handleDelete = async () => {
    await deleteUser(deleteId);

    setSnackbar({
      open: true,
      message: "User successfully deleted",
    });

    setDeleteId(null);
    setOpenDialog(false);
  };

  return (
    <>
      {apiData.length > 0 ? (
        <div className="table-container">
          <div className="table-background">
            <form onSubmit={handleSubmit}>
              <Table className="table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell style={{ width: "50px", textAlign: "right" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {apiData.map((user) => (
                    <Fragment key={user._id}>
                      {editId === user._id ? (
                        <EditRow
                          formData={formData}
                          handleChange={handleChange}
                          handleCancel={() => setEditId(null)}
                        />
                      ) : (
                        <ReadRow
                          user={user}
                          handleEdit={handleEdit}
                          handlePromptDelete={handlePromptDelete}
                        />
                      )}
                    </Fragment>
                  ))}
                </TableBody>
              </Table>
            </form>
          </div>
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
        </div>
      ) : (
        <div className="no-users-found">
          <span>No users found.</span>
        </div>
      )}
    </>
  );
};
