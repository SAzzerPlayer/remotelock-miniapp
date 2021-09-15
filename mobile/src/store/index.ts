import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import * as Reducers from "./modules";

const middlewares: Middleware[] = [
  //axios
];

const enhancer = compose(applyMiddleware(...middlewares));
export const store = createStore<any, any, any, any>(
  combineReducers(Reducers),
  enhancer
);
