import React from "react";
import { View, ImageRequireSource, Image } from "react-native";
import { SharedText } from "../Text";
import { styles } from "./styles";

interface ICardProps {
  title: string;
  hint: string;
  imgSource?: ImageRequireSource;
  avatarStyle?: Record<string, any>;
}

export const Card: React.FC<ICardProps> = ({
  children,
  imgSource,
  avatarStyle,
  title,
  hint,
}) => (
  <View style={styles.card}>
    {!!imgSource ? (
      <Image style={[styles.avatar, avatarStyle]} source={imgSource} />
    ) : (
      <View style={[styles.avatar, avatarStyle]} />
    )}
    <View style={styles.content}>
      <SharedText category="h1" numberOfLines={3}>
        {title}
      </SharedText>
      <SharedText category="p1" style={styles.hintText} numberOfLines={2}>
        {hint}
      </SharedText>
      {children}
    </View>
  </View>
);
