import React, { useContext, useState, useEffect, Fragment } from "react";
import {
  TableHead,
  TableRow,
  TableBody,
  CircularProgress,
} from "@mui/material";

import { EditRow } from "./EditRow";
import { ReadRow } from "./ReadRow";
import { DeletePrompt } from "./DeletePrompt";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import { apiRequest } from "../../helpers/api-request";

import { updateUser, deleteUser } from "../../actions/userActions";

import * as C from "./styles";

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

    const updatedUser = { ...formData };
    await updateUser(updatedUser, editId);

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
        <>
          <C.Container>
            <form onSubmit={handleSubmit}>
              <C.TableBackground>
                <C.Table>
                  <TableHead>
                    <TableRow>
                      <C.TableHeader>Name</C.TableHeader>
                      <C.TableHeader>Email</C.TableHeader>
                      <C.TableHeader actions="true">Actions</C.TableHeader>
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
                </C.Table>
                <C.TotalItems>
                  <span>Total items: {apiData.length}</span>
                </C.TotalItems>
              </C.TableBackground>
            </form>
          </C.Container>
          <DeletePrompt
            openDialog={openDialog}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <C.NoUsersFound>
          {loading ? <C.LoadingIndicator /> : <span>No users found</span>}
        </C.NoUsersFound>
      )}
    </>
  );
};
