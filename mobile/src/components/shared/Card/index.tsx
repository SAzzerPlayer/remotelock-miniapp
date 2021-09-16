import React from "react";
import { View, Image } from "react-native";
import { SharedText } from "../Text";
import { styles } from "./styles";

interface ICardProps {
  title: string;
  hint?: string;
  avatarStyle?: Record<string, any>;
}

export const Card: React.FC<ICardProps> = ({
  children,
  avatarStyle,
  title,
  hint,
}) => (
  <View style={styles.card}>
    <Image
      source={require("../../../assets/kitten.jpg")}
      style={[styles.avatar, avatarStyle]}
    />
    <View style={styles.content}>
      <SharedText category="h1" numberOfLines={3}>
        {title}
      </SharedText>
      {!!hint && (
        <SharedText category="p1" style={styles.hintText} numberOfLines={2}>
          {hint}
        </SharedText>
      )}
      {children}
    </View>
  </View>
);
