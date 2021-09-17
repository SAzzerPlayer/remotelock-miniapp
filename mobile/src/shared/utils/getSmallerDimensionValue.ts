import { Dimensions } from "react-native";

export const getSmallerDimensionValue = () => {
  const { height, width } = Dimensions.get("screen");
  return Math.min(height, width);
};
