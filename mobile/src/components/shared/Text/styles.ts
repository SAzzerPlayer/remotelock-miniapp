import { StyleSheet } from "react-native";
import { ColorTheme } from "@shared/ColorTheme";
import { ESharedTextCategory, TSharedTextProp } from "./options";

export const styles = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
    color: ColorTheme.regular,
  },
});

const fontWeights = {
  bold: {
    fontFamily: "sans-serif-medium",
    fontWeight: "900",
  },
  regular: {
    fontWeight: "600",
    fontFamily: "sans-serif",
  },
  light: {
    fontFamily: "sans-serif-light",
    fontWeight: "400",
  },
};

type TRequiredStyleProps =
  | "fontSize"
  | "lineHeight"
  | "fontWeight"
  | "fontFamily";

export const categoryStyles: Record<
  ESharedTextCategory,
  Record<TRequiredStyleProps, any>
> = {
  [ESharedTextCategory.h1]: {
    fontSize: 24,
    lineHeight: 28,
    ...fontWeights.bold,
  },
  [ESharedTextCategory.h2]: {
    fontSize: 20,
    lineHeight: 24,
    ...fontWeights.bold,
  },
  [ESharedTextCategory.h3]: {
    fontSize: 16,
    lineHeight: 20,
    ...fontWeights.bold,
  },
  [ESharedTextCategory.s1]: {
    fontSize: 20,
    lineHeight: 24,
    ...fontWeights.regular,
  },
  [ESharedTextCategory.p1]: {
    fontSize: 14,
    lineHeight: 16,
    ...fontWeights.light,
  },
  [ESharedTextCategory.p2]: {
    fontSize: 12,
    lineHeight: 14,
    ...fontWeights.light,
  },
};

export const getSharedTextStyle = (category: TSharedTextProp) => {
  if (Object.keys(ESharedTextCategory).includes(category)) {
    return StyleSheet.flatten([styles.text, categoryStyles[category]]);
  }
  console.error(`Setted invalid category for SharedText style = ${category}`);
  return StyleSheet.flatten([styles.text, categoryStyles.s1]);
};
