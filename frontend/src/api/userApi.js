import axiosClient from "./axiosClient";

const register = async (data) => {
  const responseData = axiosClient.post("/api/users/register", data);
  if (responseData) {
  }
  return responseData;
};

const userApi = {
  register,
};

export default userApi;
