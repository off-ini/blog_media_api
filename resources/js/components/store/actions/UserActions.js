import APIModel from "../../core";
import axios from "axios";

export const index = () => {
    return axios.get(APIModel.HOST + "/users");
};

export const padding = (pageNumber) => {
    return axios.get(APIModel.HOST + "/users?page="+pageNumber);
};

export const get = (search) => {
  return axios.get(APIModel.HOST + "/users" + search);
};

export const show = (id) => {
  return axios.get(APIModel.HOST + "/users/" + id);
};

export const store = (params) => {
  return axios.post(APIModel.HOST + "/users", params);
};

export const edit = (id, data) => {
  return axios.put(APIModel.HOST + "/users/" + id, data);
};

export const remove = (id) => {
  return axios.delete(APIModel.HOST + "/users/" + id);
};
