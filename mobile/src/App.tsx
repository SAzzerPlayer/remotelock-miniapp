import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { TopTabNavigator } from "./navigation/TopTabNavigator";
import * as ScreenOrientation from "expo-screen-orientation";

(function () {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    .then(() => console.log("[APP]: Portrait orientation is locked."))
    .catch((e) =>
      console.error("[APP]: Failed to lock portrait orientation!\n", e)
    );
})();

export const App: React.FC = () => (
  <ReduxProvider store={store}>
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  </ReduxProvider>
);
