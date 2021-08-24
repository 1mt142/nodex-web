/**
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-04-21 11:05:19
 * @modify date 2021-05-17 13:06:50
 * @desc All axios instance and utility functions to handle requests.
 */

import axios from "axios";
import { BASE_URL, REFRESH_TOKEN } from "../apiEndpoints";
import {
  getRefreshToken,
  getToken,
  setRefreshToken,
  setToken,
} from "./authUtils";

const publicRequest = axios.create({ baseURL: BASE_URL });
publicRequest.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const originalErrorMessage = error.message || "Oops!!! Something Went Wrong !";
    if (error.response && error.response.data) {
      const newError = error.response.data;
      if (!newError.message) {
        newError.message = originalErrorMessage;
      }
      return Promise.reject(newError);
    }
    return Promise.reject(error);
  }
);

export const getData = publicRequest.get;
export const postData = publicRequest.post;
export const putData = publicRequest.put;
export const deleteData = publicRequest.delete;

const privateRequest = axios.create({
  baseURL: BASE_URL,
});

privateRequest.interceptors.request.use((req) => {
  req.headers.Authorization = `b2b_portal ${getToken()}`;
  return req;
});

privateRequest.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const originalErrorMessage = error.message || "Oops!!! Something Went Wrong !";
    const originalRequest = error.config;
    const refreshToken = getRefreshToken();
    if (
      refreshToken &&
      error.response &&
      error.response.status === 401 &&
      // eslint-disable-next-line no-underscore-dangle
      !originalRequest._retry
    ) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      return axios
        .post(REFRESH_TOKEN, { token: refreshToken })
        .then((res) => {
          setToken(res.data.token);
          setRefreshToken(res.data.refresh_token);
          originalRequest.headers.Authorization = `CM ${res.data.token}`;
          return axios(originalRequest);
        })
        .catch(() => {
          window.location = "/";
        });
    }
    if (error.response && error.response.data) {
      const newError = error.response.data;
      if (!newError.message) {
        newError.message = originalErrorMessage;
      }
      return Promise.reject(newError);
    }
    return Promise.reject(error);
  }
);

export const getDataWithAuth = privateRequest.get;
export const postDataWithAuth = privateRequest.post;
export const putDataWithAuth = privateRequest.put;
export const deleteDataWithAuth = privateRequest.delete;
const allModules = {
  getData,
  postData,
  putData,
  deleteData,
  getDataWithAuth,
  postDataWithAuth,
  putDataWithAuth,
  deleteDataWithAuth,
};
export default allModules;
