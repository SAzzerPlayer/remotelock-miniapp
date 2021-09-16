import React from "react";
import { Animated, Pressable } from "react-native";
import { EProcessState } from "@shared/EProcessState";
import { SharedText } from "@components/shared/Text";
import { styles } from "./styles";
import { ProcessColor, ProcessMessage } from "./options";

interface IProcessIndicatorProps {
  state: EProcessState;
  onReloadPress?: () => void;
}

export const ProcessIndicator: React.FC<IProcessIndicatorProps> = ({
  state,
  onReloadPress,
}) => {
  const isShown = state !== EProcessState.Waiting;
  const opacityValue = Number(!!isShown);
  const [opacity] = React.useState(new Animated.Value(opacityValue));

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: opacityValue,
      duration: 150,
      delay: isShown ? 200 : 0,
      useNativeDriver: true,
    }).start();
  }, [isShown, opacity, opacityValue]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: ProcessColor[state],
          opacity,
        },
      ]}
    >
      <SharedText category="p1" style={styles.message}>
        {ProcessMessage[state]}
      </SharedText>
      {state === EProcessState.Error && !!onReloadPress && (
        <Pressable onPress={onReloadPress} style={styles.reloadButton}>
          <SharedText category={"p1"} style={styles.reloadText}>
            Reload
          </SharedText>
        </Pressable>
      )}
    </Animated.View>
  );
};
