import axiosClient from "./axiosClient";

const register = async (data) => {
  return await axiosClient.post("/api/users/register", data);
};

const login = async (data) => {
  return await axiosClient.post("/api/users/login", data);
};

const userApi = {
  register,
  login,
};

export default userApi;
