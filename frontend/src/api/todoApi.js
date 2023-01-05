import axiosClient from "./axiosClient";

const getAll = async () => {
  return await axiosClient.get("/api/todos");
};

const todoApi = {
  getAll,
};

export default todoApi;
