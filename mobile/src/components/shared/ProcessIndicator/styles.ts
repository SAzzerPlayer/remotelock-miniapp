import { StyleSheet, Platform } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: 8,
    opacity: 0,
    zIndex: 1,
  },
  message: {
    color: ColorTheme.white,
  },
  reloadButton: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 64,
    marginLeft: 16,
  },
  reloadText: { color: ColorTheme.yellow },
});
