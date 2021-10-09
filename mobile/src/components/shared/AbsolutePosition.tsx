import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    flexDirection: 'row',
  },
});

interface IAbsolutePositionProps {
  zIndex?: number;
}

export const AbsolutePosition: React.FC<IAbsolutePositionProps> = ({
  zIndex = 0,
  children,
}) => (
  <View style={StyleSheet.flatten([styles.position, { zIndex }])}>
    {children}
  </View>
);
