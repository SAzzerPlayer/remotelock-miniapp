import { createReducer } from "typesafe-actions";
import { EProcessState } from "@shared/EProcessState";
import { extractFetchedDevice } from "@shared/utils/extractFetchedDevice";
import { DevicesActions } from "./Actions";
import { IDevicesState } from "./IDevicesState";

const initialState: IDevicesState = {
  devices: [],
  query: "",
  processState: EProcessState.Waiting,
};

export const DevicesReducer = createReducer(initialState)
  .handleAction(DevicesActions.searchDevicesAsync.request, (state) => ({
    ...state,
    processState: EProcessState.Loading,
  }))
  .handleAction(DevicesActions.searchDevicesAsync.success, (state, action) => ({
    ...state,
    devices: action.payload.data.data.map(extractFetchedDevice),
    processState:
      action.payload.data.data.length > 0
        ? EProcessState.Waiting
        : EProcessState.EmptyResponse,
  }))
  .handleAction(DevicesActions.setQuery, (state, action) => ({
    ...state,
    query: action.payload,
  }))
  .handleAction(DevicesActions.searchDevicesAsync.failure, (state) => ({
    ...state,
    processState: EProcessState.Error,
  }))
  .handleAction(DevicesActions.switchDeviceLock, (state, action) => ({
    ...state,
    devices: state.devices.reduce((arr, d) => {
      if (d.id === action.payload) {
        d.attributes.state = !d.attributes.state;
      }
      arr.push(d);
      return arr;
    }, []),
  }))
  .handleAction(DevicesActions.reset, () => ({
    ...initialState,
  }));
