import { StyleSheet } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";
import { shadowStyles } from "@shared/style/shadow";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: 40,
    backgroundColor: "transparent",
    paddingVertical: 8,
    opacity: 0,
    ...shadowStyles.intense,
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
