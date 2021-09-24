import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { Routes } from './Routes';
import { TopTabBar } from './TopTabBar';
import { DevicesScreen } from '@screens/Devices';
import { UsersScreen } from '@screens/Users';
import { getSmallerDimensionValue } from '@shared/utils/getSmallerDimensionValue';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sceneContainer: {
    bottom: 0,
    width: getSmallerDimensionValue(),
    alignSelf: 'center',
  },
});

const Tab = createBottomTabNavigator();

export const TopTabNavigator: React.FC = () => {
  const [screenTopOffset, setScreenTopOffset] = React.useState(0);

  const tabBar = React.useCallback<(params: BottomTabBarProps) => JSX.Element>(
    ({ navigation: { navigate } }) => (
      <TopTabBar
        navigate={navigate}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setScreenTopOffset(height)}
      />
    ),
    [],
  );

  const sceneContainerStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.sceneContainer,
        {
          marginTop: screenTopOffset,
        },
      ]),
    [screenTopOffset],
  );
  const screenOptions = React.useMemo(
    () => ({ headerShown: false, header: () => null }),
    [],
  );

  return (
    <Tab.Navigator
      tabBar={tabBar}
      sceneContainerStyle={sceneContainerStyle}
      screenOptions={screenOptions}
    >
      <Tab.Screen name={Routes.Devices} component={DevicesScreen} />
      <Tab.Screen name={Routes.Users} component={UsersScreen} />
    </Tab.Navigator>
  );
};
