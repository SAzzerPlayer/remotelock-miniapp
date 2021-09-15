import { StyleSheet } from "react-native";
import { ColorTheme } from "../../../../shared/ColorTheme";

export const styles = StyleSheet.create({
  statusPosition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: -8,
  },
  periodText: { color: ColorTheme["hint-2"], marginTop: 4 },
  statusBadge: { padding: 12, borderRadius: 8 },
  status: { textTransform: "uppercase" },
});
