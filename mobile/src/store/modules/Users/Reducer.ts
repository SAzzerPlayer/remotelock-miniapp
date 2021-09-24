import { createReducer } from 'typesafe-actions';
import { EProcessState } from '@shared/EProcessState';
import { UsersActions } from './Actions';
import { IUsersState } from './IUsersState';
import { extractFetchedUser } from '@shared/utils/extractFetchedUser';

const initialState: IUsersState = {
  users: [],
  processState: EProcessState.Waiting,
};

export const UsersReducer = createReducer(initialState)
  .handleAction(UsersActions.loadUsersAsync.request, state => ({
    ...state,
    processState: EProcessState.Loading,
  }))
  .handleAction(UsersActions.loadUsersAsync.success, (state, action) => ({
    ...state,
    users: action.payload.data.data.map(extractFetchedUser),
    processState:
      action.payload.data.data.length > 0
        ? EProcessState.Waiting
        : EProcessState.EmptyResponse,
  }))
  .handleAction(UsersActions.loadUsersAsync.failure, state => ({
    ...state,
    processState: EProcessState.Error,
  }))
  .handleAction(UsersActions.reset, () => ({
    ...initialState,
  }));
