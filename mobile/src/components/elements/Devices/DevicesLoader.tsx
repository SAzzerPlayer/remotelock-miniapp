import React from "react";
import { useDispatch } from "react-redux";
import { useDevicesSelector } from "../../../shared/selectors/useDevicesSelector";
import { DevicesActions } from "../../../store/modules/Devices/Actions";
import { ProcessIndicator } from "../../shared/ProcessIndicator";

export const DevicesLoader: React.FC = () => {
  const dispatch = useDispatch();
  const { query, processState: process } = useDevicesSelector();

  const load = React.useCallback(
    () =>
      dispatch(
        DevicesActions.searchDevicesAsync.request({
          request: {
            url: "api/devices",
            params: {
              name: query,
            },
          },
        })
      ),
    [query]
  );

  React.useEffect(() => {
    load();
  }, [load]);

  return <ProcessIndicator state={process} onReloadPress={load} />;
};
