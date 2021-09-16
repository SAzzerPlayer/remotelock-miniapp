import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import axiosMiddleware from "./middlewares/axios";
import * as Reducers from "./modules";

const middlewares: Middleware[] = [axiosMiddleware];

export const store = createStore<any, any, any, any>(
  combineReducers(Reducers),
  applyMiddleware(...middlewares),
);
