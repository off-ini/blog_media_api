import APIModel from "../../core";
import axios from "axios";

export const index = () => {
    return axios.get(APIModel.HOST + "/categories");
};

export const padding = (pageNumber, elementNumber) => {
    return axios.get(APIModel.HOST + `/categories/padding/${elementNumber}?page=${pageNumber}`);
};

export const get = (search) => {
  return axios.get(APIModel.HOST + "/categories" + search);
};

export const show = (id) => {
  return axios.get(APIModel.HOST + "/categories/" + id);
};

export const store = (params) => {
  return axios.post(APIModel.HOST + "/categories", params);
};

export const edit = (id, data) => {
  return axios.put(APIModel.HOST + "/categories/" + id, data);
};

export const remove = (id) => {
  return axios.delete(APIModel.HOST + "/categories/" + id);
};
