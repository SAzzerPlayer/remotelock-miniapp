import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { TopTabNavigator } from './navigation/TopTabNavigator';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorTheme } from '@shared/ColorTheme';

(function () {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    .then(() => console.log('[APP]: Portrait orientation is locked.'))
    .catch(e =>
      console.error('[APP]: Failed to lock portrait orientation!\n', e),
    );
})();

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ColorTheme['back-1'],
  },
});

export const App: React.FC = () => (
  <ReduxProvider store={store}>
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <TopTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  </ReduxProvider>
);
