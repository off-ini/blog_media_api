import APIModel from "../../core";
import axios from "axios";

export const index = () => {
    return axios.get(APIModel.HOST + "/albums");
};

export const padding = (pageNumber, elementNumber) => {
    return axios.get(APIModel.HOST + `/albums/padding/${elementNumber}?page=${pageNumber}`);
};

export const get = (search) => {
  return axios.get(APIModel.HOST + "/albums" + search);
};

export const show = (id) => {
  return axios.get(APIModel.HOST + "/albums/" + id);
};

export const store = (params) => {
  return axios.post(APIModel.HOST + "/albums", params);
};

export const edit = (id, data) => {
  return axios.put(APIModel.HOST + "/albums/" + id, data);
};

export const remove = (id) => {
  return axios.delete(APIModel.HOST + "/albums/" + id);
};
