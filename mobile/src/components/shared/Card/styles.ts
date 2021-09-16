import { StyleSheet } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 24,
    elevation: 1,
  },
  avatar: {
    width: 128,
    aspectRatio: 1,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: ColorTheme["back-3"],
    backgroundColor: ColorTheme["back-2"],
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
  },
  hintText: {
    color: ColorTheme["hint-1"],
    marginTop: 2,
  },
});
