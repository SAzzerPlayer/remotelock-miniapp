import { createReducer } from "typesafe-actions";
import { UsersActions } from "./Actions";
import { IUsersState } from "./IUsersState";

const initialState: IUsersState = {
  users: [],
};

export const UsersReducer = createReducer(initialState)
  .handleAction(UsersActions.loadUsers, (state) => ({
    ...state,
  }))
  .handleAction(UsersActions.reset, () => ({
    ...initialState,
  }));
