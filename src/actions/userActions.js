import axios from "axios";

const api = axios.create({ baseURL: "https://d9c-crud-backend.herokuapp.com" });

export const createUser = async (user) => {
  try {
    const data = await api.post("/users", user).then((res) => {
      return res.data;
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (user, id) => {
  try {
    const data = await api.patch(`/users/${id}`, user).then((res) => {
      return res.data;
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (id) => {
  try {
    const data = await api.delete(`/users/${id}`).then((res) => {
      return res.data;
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
