import { createAction, createAsyncAction } from "typesafe-actions";
import { AxiosResponse, AxiosError } from "axios";
import {
  axiosErrorSuffix,
  axiosSuccessSuffix,
} from "../../middlewares/axios/suffixes";
import { IFetchedDevice } from "../../../shared/IDevice";

const withPrefix = (s: string) => `devices/${s}`;
const loadDevicesSuffix = "LOAD_DEVICES";

type TSearchRequest = {
  request: {
    url: "api/devices";
    params?: {
      name: string;
    };
  };
};

export const DevicesActions = {
  searchDevicesAsync: createAsyncAction(
    withPrefix(loadDevicesSuffix),
    withPrefix(loadDevicesSuffix + axiosSuccessSuffix),
    withPrefix(loadDevicesSuffix + axiosErrorSuffix)
  )<TSearchRequest, AxiosResponse<{ data: IFetchedDevice[] }>, AxiosError>(),
  switchDeviceLock: createAction(withPrefix("SWITCH_DEVICE_LOCK"))<string>(),
  setQuery: createAction(withPrefix("SET_QUERY"))<string>(),
  reset: createAction(withPrefix("RESET"))<never>(),
};
