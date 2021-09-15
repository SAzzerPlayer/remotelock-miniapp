import { createAction } from "typesafe-actions";
import {} from "redux-axios-middleware";

const loadDevices = (query?: string) => ({
  types: [
    "devices/LOAD_DEVICES",
    "devices/LOAD_DEVICES_SUCCESS",
    "devices/LOAD_DEVICES_ERROR",
  ],
  payload: {
    request: {
      url: "devices",
      query: {
        filter: query,
      },
    },
  },
});

export const DevicesActions = {
  loadDevices,
  searchDevices: createAction("devices/SEARCH_DEVICES")<string>(),
  reset: createAction("devices/RESET")<never>(),
};
