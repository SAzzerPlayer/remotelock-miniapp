import { createAction } from "typesafe-actions";

export const UsersActions = {
  loadUsers: createAction("users/LOAD_USERS")<never>(),
  reset: createAction("users/RESET")<never>(),
};
