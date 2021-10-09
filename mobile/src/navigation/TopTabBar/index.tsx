import React from 'react';
import {
  View,
  Animated,
  Pressable,
  LayoutChangeEvent,
  StyleSheet,
} from 'react-native';
import { styles, MAX_TRANSLATE_X } from './styles';
import { tabRoutesArray } from './options';
import { SharedText } from '@components/shared/Text';

interface ITopTabBarProps {
  navigate: (route: string) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const TopTabBar: React.FC<ITopTabBarProps> = ({
  navigate,
  onLayout,
}) => {
  const [transform] = React.useState(new Animated.Value(0));

  const animateRef = React.useRef<ReturnType<typeof Animated.timing>>(null);
  const onTabPress = React.useCallback(
    (index: number) => () => {
      animateRef.current?.stop && animateRef.current.stop();
      animateRef.current = Animated.timing(transform, {
        toValue: index,
        duration: 150,
        useNativeDriver: true,
      });
      animateRef.current.start();
      navigate(tabRoutesArray[index].route);
    },
    [navigate, transform],
  );

  const tabBackgroundStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.animatableBackground,
        {
          transform: [
            {
              translateX: transform.interpolate({
                inputRange: [0, tabRoutesArray.length - 1],
                outputRange: [0, MAX_TRANSLATE_X],
              }),
            },
          ],
        },
      ]),
    [transform],
  );

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.inner}>
        <Animated.View style={tabBackgroundStyle} />
        {tabRoutesArray.map(({ title }, index) => (
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
