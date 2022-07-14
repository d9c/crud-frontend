import React, { useContext, useState, useEffect, Fragment } from "react";
import axios from "axios";
import { TableHead, TableRow, TableBody } from "@mui/material";

import { EditRow } from "./EditRow";
import { ReadRow } from "./ReadRow";
import { DeletePrompt } from "./DeletePrompt";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import { updateUser, deleteUser } from "../../actions/userActions";

import * as C from "./styles";

export const MuiTable = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    refreshScreen();
  }, []);

  const clearFormData = () => {
    setFormData({
      _id: "",
      name: "",
      email: "",
    });
  };

  const refreshScreen = async () => {
    clearFormData();

    const res = await axios({
      method: "get",
      responseType: "json",
      url: "https://d9c-crud-backend.herokuapp.com/users",
    });

    setApiData(res.data);
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEdit = (user) => {
    setFormData({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const updatedUser = { ...formData };
    await updateUser(updatedUser, updatedUser._id);

    refreshScreen();
    setSnackbar({
      open: true,
      message: "User successfully updated",
    });
  };

  const handleDeletePrompt = (e, user) => {
    setFormData({ ...formData, _id: user._id });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    clearFormData();
    setOpenDialog(false);
  };

  const handleCancelEdit = () => {
    clearFormData();
  };

  const handleDelete = async () => {
    setLoading(true);

    await deleteUser(formData._id);

    setOpenDialog(false);
    refreshScreen();
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
                        {formData._id === user._id ? (
                          <EditRow
                            formData={formData}
                            handleChange={handleChange}
                            handleCancel={handleCancelEdit}
                          />
                        ) : (
                          <ReadRow
                            user={user}
                            handleEdit={() => handleEdit(user)}
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
            handleClose={handleCloseDialog}
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
