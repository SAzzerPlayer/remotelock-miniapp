import { StyleSheet } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";
import { getSharedTextStyle } from "@components/shared/Text/styles";
import { shadowStyles } from "@shared/style/shadow";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderColor: ColorTheme["back-3"],
    borderWidth: 1,
    borderRadius: 8,
    ...shadowStyles.regular,
  },
  input: {
    ...getSharedTextStyle("h2"),
    fontSize: 18,
    includeFontPadding: false,
  },
});
