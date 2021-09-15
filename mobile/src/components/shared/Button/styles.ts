import { StyleSheet } from "react-native";
import { ColorTheme } from "../../../shared/ColorTheme";

export const styles = StyleSheet.create({
  container: {
    minWidth: 96,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorTheme.regular,
    borderRadius: 16,
    elevation: 8,
  },
  text: {
    color: "white",
    textTransform: "capitalize",
  },
});
