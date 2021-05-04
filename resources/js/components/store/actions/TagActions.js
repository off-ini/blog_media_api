import APIModel from "../../core";
import axios from "axios";

export const index = () => {
    return axios.get(APIModel.HOST + "/tags");
};

export const padding = (pageNumber, elementNumber) => {
    return axios.get(APIModel.HOST + `/tags/padding/${elementNumber}?page=${pageNumber}`);
};

export const get = (search) => {
  return axios.get(APIModel.HOST + "/tags" + search);
};

export const show = (id) => {
  return axios.get(APIModel.HOST + "/tags/" + id);
};

export const store = (params) => {
  return axios.post(APIModel.HOST + "/tags", params);
};

export const edit = (id, data) => {
  return axios.put(APIModel.HOST + "/tags/" + id, data);
};

export const remove = (id) => {
  return axios.delete(APIModel.HOST + "/tags/" + id);
};
