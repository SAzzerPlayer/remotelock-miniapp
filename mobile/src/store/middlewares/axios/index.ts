import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

const clients = axios.create({
  baseURL: "http://localhost:4000/api/",
  responseType: "json",
});

const options = {
  returnRejectedPromiseOnError: true,
};

export default axiosMiddleware(clients, options);
