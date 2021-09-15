import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TopTabNavigator } from "./navigation/TopTabNavigator";

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
};
