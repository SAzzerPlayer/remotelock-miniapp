import React from 'react';
import { View } from 'react-native';

interface ISpacerProps {
  space: number;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
}

export const Spacer: React.FC<ISpacerProps> = ({
  space,
  top,
  left,
  right,
  bottom,
  horizontal,
  vertical,
  children,
}) => (
  <View
    style={{
      marginTop: top || vertical ? space : 0,
      marginLeft: left || horizontal ? space : 0,
      marginRight: right || horizontal ? space : 0,
      marginBottom: bottom || vertical ? space : 0,
    }}
  >
    {children}
  </View>
);
