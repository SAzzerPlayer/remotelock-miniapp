import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Routes } from "./Routes";
import { TopTabBar } from "./TopTabBar";
import { ColorTheme } from "../shared/ColorTheme";
import { DevicesScreen } from "../screens/Devices";
import { UsersScreen } from "../screens/Users";

const Tab = createBottomTabNavigator();

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
            layout: { height, y },
          },
        }) => setScreenTopOffset(height + y)}
      />
    ),
    []
  );
  const screenOptions = React.useMemo(
    () => ({ headerShown: false, header: () => null }),
    []
  );

  return (
    <Tab.Navigator
      detachInactiveScreens
      tabBar={tabBar}
      sceneContainerStyle={sceneContainerStyle}
      screenOptions={screenOptions}
    >
      <Tab.Screen name={Routes.Devices} component={DevicesScreen} />
      <Tab.Screen name={Routes.Users} component={UsersScreen} />
    </Tab.Navigator>
  );
};
