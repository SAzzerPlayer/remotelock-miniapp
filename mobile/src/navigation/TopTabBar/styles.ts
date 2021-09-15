import { StyleSheet, Dimensions } from "react-native";
import { ColorTheme } from "../../shared/ColorTheme";
import { TabRoutesArray } from "./options";

const { width } = Dimensions.get("screen");
const CONTAINER_PADDING = 16;
const INNER_PADDING = 4;
const ALL_TABS_WIDTH = width - CONTAINER_PADDING * 2 - INNER_PADDING * 2;
const TAB_WIDTH = ALL_TABS_WIDTH / TabRoutesArray.length;
export const MAX_TRANSLATE_X = ALL_TABS_WIDTH - TAB_WIDTH;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: CONTAINER_PADDING,
    paddingBottom: 0,
    backgroundColor: ColorTheme["back-2"],
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorTheme["back-3"],
    borderRadius: 8,
    padding: INNER_PADDING,
    elevation: 4,
  },
  animatableBackground: {
    position: "absolute",
    left: 4,
    height: "100%",
    backgroundColor: ColorTheme.white,
    width: TAB_WIDTH,
    borderRadius: 8,
    elevation: 5,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    elevation: 6,
  },
});
