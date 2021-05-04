import APIModel from "../../core";
import axios from "axios";

export const index = () => {
    return axios.get(APIModel.HOST + "/images");
};

export const padding = (pageNumber, elementNumber) => {
    return axios.get(APIModel.HOST + `/images/padding/${elementNumber}?page=${pageNumber}`);
};

export const get = (search) => {
  return axios.get(APIModel.HOST + "/images" + search);
};

export const show = (id) => {
  return axios.get(APIModel.HOST + "/images/" + id);
};

export const store = (params) => {
  return axios.post(APIModel.HOST + "/images", params);
};

export const edit = (id, data) => {
  return axios.put(APIModel.HOST + "/images/" + id, data);
};

export const remove = (id) => {
  return axios.delete(APIModel.HOST + "/images/" + id);
};
