import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { axiosErrorSuffix, axiosSuccessSuffix } from "./suffixes";

const clients = axios.create({
  baseURL: "http://172.20.10.2:4000/",
  //baseURL: "http://127.0.0.1:4000/",
  responseType: "json",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosMiddleware(clients, {
  returnRejectedPromiseOnError: true,
  successSuffix: axiosSuccessSuffix,
  errorSuffix: axiosErrorSuffix,
});
