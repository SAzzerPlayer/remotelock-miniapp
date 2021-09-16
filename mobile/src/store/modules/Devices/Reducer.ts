import { createReducer } from "typesafe-actions";
import { EProcessState } from "../../../shared/EProcessState";
import { extractFetchedDevice } from "../../../shared/utils/extractFetchedDevice";
import { DevicesActions } from "./Actions";
import { IDevicesState } from "./IDevicesState";

const initialState: IDevicesState = {
  devices: [],
  query: "",
  processState: EProcessState.Waiting,
};

export const DevicesReducer = createReducer(initialState)
  .handleAction(DevicesActions.searchDevicesAsync.request, (state) => {
    return {
      ...state,
      processState: EProcessState.Loading,
    };
  })
  .handleAction(DevicesActions.searchDevicesAsync.success, (state, action) => {
    return {
      ...state,
      devices: action.payload.data.data.map(extractFetchedDevice),
      processState:
        action.payload.data.data.length > 0
          ? EProcessState.Waiting
          : EProcessState.EmptyResponse,
    };
  })
  .handleAction(DevicesActions.setQuery, (state, action) => ({
    ...state,
    query: action.payload,
  }))
  .handleAction(DevicesActions.searchDevicesAsync.failure, (state) => {
    return {
      ...state,
      processState: EProcessState.Error,
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
