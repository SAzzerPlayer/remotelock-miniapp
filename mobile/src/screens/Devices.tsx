import React from "react";
import { ScrollView, View } from "react-native";

export const DevicesScreen: React.FC = () => (
  <ScrollView contentContainerStyle={{ alignItems: "flex-end" }}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <View
        key={i}
        style={{
          margin: 16,
          height: 64,
          width: 64,
          backgroundColor: "yellow",
        }}
      />
    ))}
  </ScrollView>
);
