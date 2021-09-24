import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosResponse, AxiosError } from 'axios';
import {
  axiosErrorPostfix,
  axiosSuccessPostfix,
} from '@store/middlewares/axios/postfixes';
import { IFetchedDevice } from '@shared/interfaces/IDevice';

const withPrefix = (s: string) => `devices/${s}`;
const loadDevicesSuffix = 'LOAD_DEVICES';

//  Extra typing is needed due to the mismatch of structures
//  between modules 'typesafe-actions' and 'redux-axios-middleware'.
//  For correct definitions, the url field type is assigned to a specific string
//  and separately params
type TSearchRequest = {
  request: {
    url: 'api/devices';
    params?: {
      name: string;
    };
  };
};

export const DevicesActions = {
  searchDevicesAsync: createAsyncAction(
    withPrefix(loadDevicesSuffix),
    withPrefix(loadDevicesSuffix + axiosSuccessPostfix),
    withPrefix(loadDevicesSuffix + axiosErrorPostfix),
  )<TSearchRequest, AxiosResponse<{ data: IFetchedDevice[] }>, AxiosError>(),
  switchDeviceLock: createAction(withPrefix('SWITCH_DEVICE_LOCK'))<string>(),
  setQuery: createAction(withPrefix('SET_QUERY'))<string>(),
  reset: createAction(withPrefix('RESET'))<never>(),
};
