import React from "react";
import {
  View,
  Animated,
  Pressable,
  LayoutChangeEvent,
  StyleSheet,
} from "react-native";
import { styles, MAX_TRANSLATE_X } from "./styles";
import { TabRoutesArray } from "./options";
import { SharedText } from "@components/shared/Text";

interface ITopTabBarProps {
  navigate: (route: string) => void;
  topInsets: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const TopTabBar: React.FC<ITopTabBarProps> = ({
  navigate,
  topInsets,
  onLayout,
}) => {
  const [transform] = React.useState(new Animated.Value(0));
  const animateRef = React.useRef<any>(null);

  const onTabPress = React.useCallback(
    (index: number) => () => {
      animateRef.current?.stop && animateRef.current.stop();
      animateRef.current = Animated.timing(transform, {
        toValue: index,
        duration: 150,
        useNativeDriver: true,
      });
      animateRef.current.start();
      navigate(TabRoutesArray[index].route);
    },
    [navigate]
  );

  const containerStyle = React.useMemo(
    () => StyleSheet.flatten([styles.container, { top: topInsets }]),
    [topInsets]
  );
  const tabBackgroundStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.animatableBackground,
        {
          transform: [
            {
              translateX: transform.interpolate({
                inputRange: [0, TabRoutesArray.length - 1],
                outputRange: [0, MAX_TRANSLATE_X],
              }),
            },
          ],
        },
      ]),
    [transform]
  );

  return (
    <View style={containerStyle} onLayout={onLayout}>
      <View style={styles.inner}>
        <Animated.View style={tabBackgroundStyle} />
        {TabRoutesArray.map(({ title }, index) => (
          <Pressable
            key={index}
            onPress={onTabPress(index)}
            style={styles.button}
          >
            <SharedText category="h3">{title}</SharedText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
