import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import axiosMiddleware from "./middlewares/axios";
import * as Reducers from "./modules";

const middlewares: Middleware[] = [axiosMiddleware];

export const store = createStore(
  combineReducers(Reducers),
  applyMiddleware(...middlewares),
);
