import userApi from "../../api/userApi";

const register = async (data) => {
  const responseData = await userApi.register(data);
  if (responseData) {
    localStorage.setItem("user", JSON.stringify(responseData));
  }
  return responseData;
};

const login = async (data) => {
  const responseData = await userApi.login(data);
  if (responseData) {
    localStorage.setItem("user", JSON.stringify(responseData));
  }
  return responseData;
};

const authService = {
  register,
  login,
};

export default authService;
