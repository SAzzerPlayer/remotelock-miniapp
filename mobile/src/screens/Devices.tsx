import React from "react";
import { ScrollView, View } from "react-native";
import { DeviceCard } from "../components/elements/Devices/Card";

export const DevicesScreen: React.FC = () => (
  <ScrollView
    contentContainerStyle={{
      alignItems: "flex-end",
      paddingHorizontal: 16,
      paddingTop: 16,
    }}
  >
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <React.Fragment key={i}>
        <DeviceCard
          name={"Home"}
          serial={"BG (LS-3i)"}
          locked={!!(i % 2)}
          onChangeLock={() => {}}
        />
        <View style={{ height: 16 }} />
      </React.Fragment>
    ))}
  </ScrollView>
);
