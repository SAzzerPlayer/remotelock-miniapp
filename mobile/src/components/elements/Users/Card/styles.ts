import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  statusPosition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  statusBadge: { padding: 12, borderRadius: 16, backgroundColor: "yellow" },
  status: { textTransform: "uppercase" },
});
