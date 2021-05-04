import APIModel from "../../core";
import axios from "axios";

export const index = () => {
    return axios.get(APIModel.HOST + "/videos");
};

export const padding = (pageNumber, elementNumber) => {
    return axios.get(APIModel.HOST + `/videos/padding/${elementNumber}?page=${pageNumber}`);
};

export const get = (search) => {
  return axios.get(APIModel.HOST + "/videos" + search);
};

export const show = (id) => {
  return axios.get(APIModel.HOST + "/videos/" + id);
};

export const store = (params) => {
  return axios.post(APIModel.HOST + "/videos", params);
};

export const edit = (id, data) => {
  return axios.put(APIModel.HOST + "/videos/" + id, data);
};

export const remove = (id) => {
  return axios.delete(APIModel.HOST + "/videos/" + id);
};
