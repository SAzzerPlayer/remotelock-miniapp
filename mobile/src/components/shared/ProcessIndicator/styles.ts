import { StyleSheet } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: 8,
    opacity: 0,
  },
  message: {
    color: ColorTheme.white,
  },
  reloadButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginLeft: 16,
  },
  reloadText: { color: ColorTheme.yellow },
});
