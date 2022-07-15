import axios from "axios";

const http = axios.create({
  baseURL: "https://d9c-crud-backend.herokuapp.com",
});

export const api = {
  getUsers: async () => {
    try {
      const res = await http.get("/users");
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
  createUser: async (user) => {
    try {
      const res = await http.post("/users", user);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  },
  updateUser: async (user, id) => {
    try {
      const res = await http.patch(`/users/${id}`, user);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  },
  deleteUser: async (id) => {
    try {
      const res = await http.delete(`/users/${id}`);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  },
};
