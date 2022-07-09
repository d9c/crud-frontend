import React, { useContext, useState, useEffect, Fragment } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
} from "@mui/material";

import { EditRow } from "./EditRow";
import { ReadRow } from "./ReadRow";
import { DeletePrompt } from "./DeletePrompt";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import { apiRequest } from "../../helpers/api-request";

import { updateUser, deleteUser } from "../../actions/userActions";

import "../../styles/table.scss";

export const MuiTable = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    apiRequest("https://d9c-crud-backend.herokuapp.com/users").then((data) => {
      setApiData(data);
      setLoading(false);
    });
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
    setFormData({
      name: user.name,
      email: user.email,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await updateUser({ ...formData }, editId);

    setEditId(null);
    setSnackbar({
      open: true,
      message: "User successfully updated",
    });
  };

  const handleDeletePrompt = (e, user) => {
    setDeleteId(user._id);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setDeleteId(null);
    setOpenDialog(false);
  };

  const handleDelete = async () => {
    setLoading(true);

    await deleteUser(deleteId);

    setDeleteId(null);
    setOpenDialog(false);
    setSnackbar({
      open: true,
      message: "User successfully deleted",
    });
  };

  return (
    <>
      {!loading && apiData.length > 0 ? (
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
                          handleDeletePrompt={handleDeletePrompt}
                        />
                      )}
                    </Fragment>
                  ))}
                </TableBody>
              </Table>
              <div className="table-footer">
                <span>Total items: {apiData.length}</span>
              </div>
            </form>
          </div>
          <DeletePrompt
            openDialog={openDialog}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <div className="no-users-found">
          {loading ? (
            <CircularProgress style={{ color: "#5a7896" }} />
          ) : (
            <span>No users found</span>
          )}
        </div>
      )}
    </>
  );
};
