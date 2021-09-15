import React from "react";
import { FlatList, View } from "react-native";
const data = [1,2,3,4,5,6,7,8,9,0];
export const UsersScreen: React.FC = () => (
  <FlatList
    data={data}
    renderItem={() => (
      <View
        style={{
          width: 64,
          aspectRatio: 1,
          backgroundColor: "yellow",
          margin: 16,
        }}
      />
    )}
    keyExtractor={(_, index) => `${index}`}
  />
);
