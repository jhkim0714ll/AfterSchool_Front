import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token.constants";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: "Bearer" + localStorage.getItem(ACCESS_TOKEN_KEY),
  },
});

export const noTokenCustomAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axios.defaults.withCredentials = true;
customAxios.defaults.withCredentials = true;
