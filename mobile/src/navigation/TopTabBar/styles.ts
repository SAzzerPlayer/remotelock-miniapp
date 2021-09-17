import { StyleSheet } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";
import { TabRoutesArray } from "./options";
import { shadowStyles } from "@shared/style/shadow";
import { getSmallerDimensionValue } from "@shared/utils/getSmallerDimensionValue";

const SMALLER_SCREEN_DIMENSION = getSmallerDimensionValue();
const CONTAINER_PADDING = 16;
const INNER_PADDING = 4;
const ALL_TABS_WIDTH =
  SMALLER_SCREEN_DIMENSION - CONTAINER_PADDING * 2 - INNER_PADDING * 2;
const TAB_WIDTH = ALL_TABS_WIDTH / TabRoutesArray.length;
export const MAX_TRANSLATE_X = ALL_TABS_WIDTH - TAB_WIDTH;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: SMALLER_SCREEN_DIMENSION,
    alignSelf: "center",
    padding: CONTAINER_PADDING,
    paddingBottom: 0,
    backgroundColor: ColorTheme["back-2"],
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorTheme["back-2"],
    borderRadius: 8,
    padding: INNER_PADDING,
    ...shadowStyles.regular,
  },
  animatableBackground: {
    position: "absolute",
    height: "100%",
    width: TAB_WIDTH,
    left: INNER_PADDING,
    backgroundColor: ColorTheme.white,
    borderRadius: 8,
    ...shadowStyles.regular,
    elevation: shadowStyles.regular.elevation + 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    elevation: shadowStyles.regular.elevation + 2,
  },
});
