import React from "react";
import { View, StyleSheet } from "react-native";
import { SharedText } from "./Text";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 128,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
});

interface IEmptyResponseMessageProps {
  message?: string;
}

export const EmptyResponseMessage: React.FC<IEmptyResponseMessageProps> = ({
  message = "List is empty",
}) => (
  <View style={styles.container}>
    <SharedText category={"h2"}>{message}</SharedText>
  </View>
);
