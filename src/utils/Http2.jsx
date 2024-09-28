import axios from "axios";
import { CookieStorage, CookieKeys } from "./cookies";

// const Token = CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : "";

const http2 = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});

http2.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
  };
  return config;
});

export default http2;
