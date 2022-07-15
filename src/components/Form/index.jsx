import React, { useContext, useState } from "react";

import { SnackbarContext } from "../../contexts/SnackbarContext";

import { createUser } from "../../actions/userActions";

import * as C from "./styles";

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
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <C.TextInput
          label="Name"
          name="name"
          variant="filled"
          size="small"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <C.TextInput
          label="Email"
          name="email"
          variant="filled"
          size="small"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <C.Button type="submit" variant="contained">
          Submit
        </C.Button>
      </C.Form>
    </C.Container>
  );
};
