import { StyleSheet } from "react-native";
import { ColorTheme } from "../../../../shared/ColorTheme";
import { getSharedTextStyle } from "../../../shared/Text/styles";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderColor: ColorTheme["back-3"],
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
  },
  input: {
    ...getSharedTextStyle("h2"),
    fontSize: 18,
    includeFontPadding: false,
  },
});
