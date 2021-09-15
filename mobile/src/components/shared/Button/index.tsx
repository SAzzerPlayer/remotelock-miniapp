import React from "react";
import { TouchableOpacity } from "react-native";
import { SharedText } from "../Text";
import { styles } from "./styles";

interface IButtonProps {
  onPress: () => void;
  title: string;
  style?: Record<string, any>;
}

export const Button: React.FC<IButtonProps> = ({ onPress, title, style }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={onPress}
    style={style ? [styles.container, style] : styles.container}
  >
    <SharedText category="h2" style={styles.text}>
      {title}
    </SharedText>
  </TouchableOpacity>
);
