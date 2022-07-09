import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";

import { SnackbarContext } from "../contexts/SnackbarContext";

import { createUser } from "../actions/userActions";

import "../styles/form.scss";

export const Form = () => {
  const { setSnackbar } = useContext(SnackbarContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { ...formData };
    await createUser(newUser);

    setSnackbar({
      open: true,
      message: "User successfully registered",
    });

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-background">
        <form onSubmit={handleSubmit} className="form">
          <div className="row">
            <TextField
              label="Name"
              name="name"
              variant="filled"
              style={{ backgroundColor: "#ffffff", width: "350px" }}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="row">
            <TextField
              label="Email"
              name="email"
              variant="filled"
              style={{ backgroundColor: "#ffffff", width: "350px" }}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
