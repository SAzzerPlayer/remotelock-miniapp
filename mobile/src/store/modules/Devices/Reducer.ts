import { createReducer } from "typesafe-actions";
import { DevicesActions } from "./Actions";
import { IDevicesState } from "./IDevicesState";

const initialState: IDevicesState = {
  devices: [],
  searchQuery: "",
};

export const DevicesReducer = createReducer(initialState)
  .handleAction(DevicesActions.searchDevices, (state, action) => ({
    ...state,
    searchQuery: action.payload,
  }))
  .handleAction(DevicesActions.loadDevices, (state, action) => ({
    ...state,
    devices: action.payload,
  }))
  .handleAction(DevicesActions.reset, () => ({
    ...initialState,
  }));
