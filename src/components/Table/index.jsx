import React, { useContext, useState, useEffect, Fragment } from "react";
import { TableHead, TableRow, TableBody } from "@mui/material";

import { EditRow } from "../EditRow";
import { ReadRow } from "../ReadRow";
import { DeletePrompt } from "../DeletePrompt";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import { api } from "../../helpers/api";

import * as C from "./styles";

export const Table = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editUserId, setEditUserId] = useState("");
  const [deleteUserId, setDeleteUserId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    refreshScreen();
  }, []);

  const refreshScreen = async () => {
    const data = await api.getUsers();
    setApiData(data);
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
    setEditUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const updatedUser = { ...formData };
    await api.updateUser(updatedUser, editUserId);

    setEditUserId("");

    setFormData({
      name: "",
      email: "",
    });

    refreshScreen();

    setSnackbar({
      open: true,
      message: "User successfully updated",
    });
  };

  const handleDeletePrompt = (user) => {
    setDeleteUserId(user._id);
    setOpen(true);
  };

  const handleClose = () => {
    setDeleteUserId("");
    setOpen(false);
  };

  const handleDelete = async () => {
    setLoading(true);

    await api.deleteUser(deleteUserId);

    setDeleteUserId("");

    setOpen(false);

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
                        {editUserId === user._id ? (
                          <EditRow
                            formData={formData}
                            handleChange={handleChange}
                            handleCancel={() => setEditUserId("")}
                          />
                        ) : (
                          <ReadRow
                            user={user}
                            handleEdit={() => handleEdit(user)}
                            handleDeletePrompt={() => handleDeletePrompt(user)}
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
            open={open}
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
