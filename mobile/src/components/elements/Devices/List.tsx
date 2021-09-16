import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { IDevice } from "../../../shared/IDevice";
import { useDevicesSelector } from "../../../shared/selectors/useDevicesSelector";
import { DevicesActions } from "../../../store/modules/Devices/Actions";
import { Spacer } from "../../shared/Spacer";
import { DeviceCard } from "./Card";

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export const DevicesList: React.FC = () => {
  const dispatch = useDispatch();
  const { devices } = useDevicesSelector();

  const keyExtractor = React.useCallback((item) => item.id, []);
  const renderItem = React.useCallback<(row: { item: IDevice }) => JSX.Element>(
    ({
      item: {
        id,
        attributes: { name, modelNumber, state },
      },
    }) => (
      <Spacer space={16} bottom>
        <DeviceCard
          name={name}
          serial={modelNumber}
          locked={state}
          onChangeLock={() => dispatch(DevicesActions.switchDeviceLock(id))}
        />
      </Spacer>
    ),
    [dispatch]
  );

  return (
    <FlatList
      data={devices}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};
