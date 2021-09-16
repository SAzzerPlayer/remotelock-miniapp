import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import axiosMiddleware from "./middlewares/axios";
import * as Reducers from "./modules";

const middlewares: Middleware[] = [axiosMiddleware];

const enhancer = compose(applyMiddleware(...middlewares));
export const store = createStore<any, any, any, any>(
  combineReducers(Reducers),
  enhancer,
  
);
