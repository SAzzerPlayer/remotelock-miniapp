import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { TopTabNavigator } from "./navigation/TopTabNavigator";

export const App: React.FC = () => (
  <ReduxProvider store={store}>
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  </ReduxProvider>
);
