import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { TSharedTextProp } from "./options";
import { styles, categoryStyles } from "./styles";

interface ISharedTextProps extends TextProps {
  category: TSharedTextProp;
}

export const SharedText: React.FC<ISharedTextProps> = ({
  category,
  style,
  ...textProps
}) => {
  const textStyle = React.useMemo(
    () => StyleSheet.flatten([styles.text, categoryStyles[category], style]),
    [style, category]
  );
  return <Text {...textProps} style={textStyle} />;
};
