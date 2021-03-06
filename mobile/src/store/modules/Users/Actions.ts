import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosResponse, AxiosError } from 'axios';
import {
  axiosErrorPostfix,
  axiosSuccessPostfix,
} from '@store/middlewares/axios/postfixes';
import { IFetchedUser } from '@shared/interfaces/IUser';

const withPrefix = (s: string) => `users/${s}`;
const loadUsersSuffix = 'LOAD_USERS';

//  Extra typing is needed due to the mismatch of structures
//  between modules 'typesafe-actions' and 'redux-axios-middleware'.
//  For correct definitions, the url field type is assigned to a specific string
//  and separately params
type TSearchRequest = {
  request: {
    url: 'api/users';
  };
};

export const UsersActions = {
  loadUsersAsync: createAsyncAction(
    withPrefix(loadUsersSuffix),
    withPrefix(loadUsersSuffix + axiosSuccessPostfix),
    withPrefix(loadUsersSuffix + axiosErrorPostfix),
  )<TSearchRequest, AxiosResponse<{ data: IFetchedUser[] }>, AxiosError>(),
  reset: createAction(withPrefix('RESET'))<never>(),
};
