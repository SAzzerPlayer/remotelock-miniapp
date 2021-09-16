import React from "react";
import { Card } from "@components/shared/Card";
import { View, Image } from "react-native";
import { dequal } from "dequal";
import { ColorTheme } from "@shared/ColorTheme";
import { styles } from "./styles";
import { Button } from "@components/shared/Button";

const iconSource = {
  locked: require("@assets/locked.png"),
  unlocked: require("@assets/unlocked.png"),
};

interface IDeviceCardProps {
  name: string;
  model: string;
  locked: boolean;
  onChangeLock: (v: boolean) => void;
}

export const DeviceCard = React.memo<IDeviceCardProps>(
  ({ name, model, locked, onChangeLock }) => (
    <Card
      title={name}
      hint={model}
      avatarStyle={[
        styles.avatar,
        {
          borderColor: locked ? ColorTheme.green : ColorTheme.red,
        },
      ]}
    >
      <View style={styles.flexWrapper}>
        <View style={styles.content}>
          <Image
            source={locked ? iconSource.locked : iconSource.unlocked}
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
      </View>
    </Card>
  ),
  /*onChangeLock changes aren't valuable, it updates only from object id*/
  (prevProps, nextProps) =>
    dequal(
      { ...prevProps, onChangeLock: false },
      { ...nextProps, onChangeLock: false }
    )
);
