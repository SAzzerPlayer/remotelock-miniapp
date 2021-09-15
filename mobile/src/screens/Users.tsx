import React from "react";
import { FlatList, View } from "react-native";
import { UserCard } from "../components/elements/Users/Card";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export const UsersScreen: React.FC = () => (
  <FlatList
    data={data}
    renderItem={() => (
      <React.Fragment>
        <UserCard
          name="Hovard"
          email="logvin24820@gmail.com"
          status="COMPLETED"
        />
        <View style={{ height: 16 }} />
      </React.Fragment>
    )}
    contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
    keyExtractor={(_, index) => `${index}`}
  />
);
