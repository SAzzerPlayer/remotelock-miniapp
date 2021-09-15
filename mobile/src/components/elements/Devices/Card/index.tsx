import React from "react";
import { Card } from "../../../shared/Card";
import { View, TouchableOpacity } from "react-native";
import { SharedText } from "../../../shared/Text";
import { dequal } from "dequal";

interface IDeviceCardProps {
  name: string;
  serial: string;
  locked: boolean;
  onChangeLock: (v: boolean) => void;
}

export const DeviceCard = React.memo<IDeviceCardProps>(
  ({ name, serial, locked, onChangeLock }) => {
    return (
      <Card title={name} hint={serial}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => onChangeLock(!locked)}
            style={{ width: 64, height: 32, backgroundColor: "gray" }}
          />
          <SharedText category="s1">
            {locked ? "Locked" : "Unlocked"}
          </SharedText>
        </View>
      </Card>
    );
  },
  dequal
);
