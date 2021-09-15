import React from "react";
import { FlatList } from "react-native";
import { UserCard } from "../components/elements/Users/Card";
import { Spacer } from "../components/shared/Spacer";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export const UsersScreen: React.FC = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <Spacer space={16} bottom>
        <UserCard
          name="Hovard"
          email="logvin24820@gmail.com"
          status={item % 3}
          period={{ start: Date.now(), end: Date.now() }}
        />
      </Spacer>
    )}
    contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
    keyExtractor={(_, index) => `${index}`}
  />
);
