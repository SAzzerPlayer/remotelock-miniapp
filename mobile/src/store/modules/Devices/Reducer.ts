import { createReducer } from "typesafe-actions";
import { EProcessState } from "../../../shared/EProcessState";
import { extractFetchedDevice } from "../../../shared/utils/extractFetchedDevice";
import { DevicesActions } from "./Actions";
import { IDevicesState } from "./IDevicesState";

const initialState: IDevicesState = {
  devices: [],
  query: "",
  process: EProcessState.Waiting,
};

export const DevicesReducer = createReducer(initialState)
  .handleAction(DevicesActions.searchDevicesAsync.request, (state) => {
    return {
      ...state,
      process: EProcessState.Loading,
    };
  })
  .handleAction(DevicesActions.searchDevicesAsync.success, (state, action) => {
    return {
      ...state,
      devices: action.payload.data.data.map(extractFetchedDevice),
      process: EProcessState.Waiting,
    };
  })
  .handleAction(DevicesActions.setQuery, (state, action) => ({
    ...state,
    query: action.payload,
  }))
  .handleAction(DevicesActions.searchDevicesAsync.failure, (state) => {
    return {
      ...state,
      process: EProcessState.Error,
      devices: [],
    };
  })
  .handleAction(DevicesActions.switchDeviceLock, (state, action) => {
    const devices = [...state.devices];
    const deviceIndex = devices.findIndex((d) => d.id === action.payload);
    if (deviceIndex > -1) {
      devices[deviceIndex].attributes.state = !devices[deviceIndex].attributes
        .state;
    }
    return {
      ...state,
      devices,
    };
  })
  .handleAction(DevicesActions.reset, () => ({
    ...initialState,
  }));
