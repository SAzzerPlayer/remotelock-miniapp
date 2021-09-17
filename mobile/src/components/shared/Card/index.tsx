import React from "react";
import { View, Image, ImageStyle } from "react-native";
import { SharedText } from "@components/shared/Text";
import { styles } from "./styles";

interface ICardProps {
  title: string;
  hint?: string;
  avatarStyle?: ImageStyle;
}

export const Card: React.FC<ICardProps> = ({
  children,
  avatarStyle,
  title,
  hint,
}) => (
  <View style={styles.card}>
    <Image
      source={require("@assets/kitten.jpg")}
      style={avatarStyle ? [styles.avatar, avatarStyle] : styles.avatar}
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
