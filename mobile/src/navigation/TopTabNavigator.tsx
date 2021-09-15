import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Routes } from "./Routes";
import { TopTabBar } from "./TopTabBar";
import { ColorTheme } from "../shared/ColorTheme";

const Tab = createBottomTabNavigator();
const Blank = () => null;

export const TopTabNavigator = () => {
  const [screenTopOffset, setScreenTopOffset] = React.useState(0);

  const sceneContainerStyle = React.useMemo(
    () => ({
      marginTop: screenTopOffset,
      bottom: 0,
      backgroundColor: ColorTheme["back-2"],
    }),
    [screenTopOffset]
  );
  const tabBar = React.useCallback<(params: BottomTabBarProps) => JSX.Element>(
    ({ insets: { top }, navigation: { navigate } }) => (
      <TopTabBar
        topInsets={top}
        navigate={navigate}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setScreenTopOffset(height)}
      />
    ),
    []
  );

  return (
    <Tab.Navigator
      detachInactiveScreens
      tabBar={tabBar}
      sceneContainerStyle={sceneContainerStyle}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={Routes.Devices} component={Blank} />
      <Tab.Screen name={Routes.Users} component={Blank} />
    </Tab.Navigator>
  );
};
