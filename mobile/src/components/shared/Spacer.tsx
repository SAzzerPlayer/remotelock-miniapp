import React from "react";
import { View } from "react-native";

interface ISpacerProps {
  space: number;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  zIndex?: number;
}

export const Spacer: React.FC<ISpacerProps> = ({
  space,
  top,
  left,
  right,
  bottom,
  zIndex,
  children,
}) => (
  <View
    style={{
      marginTop: top ? space : 0,
      marginLeft: left ? space : 0,
      marginRight: right ? space : 0,
      marginBottom: bottom ? space : 0,
      zIndex
    }}
  >
    {children}
  </View>
);
