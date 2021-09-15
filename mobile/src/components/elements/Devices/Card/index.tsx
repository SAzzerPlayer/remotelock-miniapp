import React from "react";
import { Card } from "../../../shared/Card";
import { View, Image } from "react-native";
import { dequal } from "dequal";
import { ColorTheme } from "../../../../shared/ColorTheme";
import { styles } from "./styles";
import { Button } from "../../../shared/Button";

const lockedIconSource = require("../../../../assets/locked.png");
const unlockedIconSource = require("../../../../assets/unlocked.png");

interface IDeviceCardProps {
  name: string;
  serial: string;
  locked: boolean;
  onChangeLock: (v: boolean) => void;
}

export const DeviceCard = React.memo<IDeviceCardProps>(
  ({ name, serial, locked, onChangeLock }) => (
    <Card
      title={name}
      hint={serial}
      avatarStyle={[
        styles.avatar,
        {
          borderColor: locked ? ColorTheme.green : ColorTheme.red,
        },
      ]}
    >
      <View style={styles.flexWrapper}>
        <Image
          source={locked ? lockedIconSource : unlockedIconSource}
          style={[
            styles.lockIcon,
            {
              tintColor: locked ? ColorTheme.green : ColorTheme.red,
            },
          ]}
        />
        <Button
          title={locked ? "Unlock" : "Lock"}
          onPress={() => onChangeLock(!locked)}
        />
      </View>
    </Card>
  ),
  dequal
);
