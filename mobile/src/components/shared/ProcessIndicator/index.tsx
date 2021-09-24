import React from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { EProcessState } from '@shared/EProcessState';
import { SharedText } from '@components/shared/Text';
import { styles } from './styles';
import { processColorDict, processMessageDict } from './options';

interface IProcessIndicatorProps {
  state: EProcessState;
  onReloadPress?: () => void;
}

export const ProcessIndicator: React.FC<IProcessIndicatorProps> = ({
  state,
  onReloadPress,
}) => {
  const isShown = state !== EProcessState.Waiting;
  const [opacity] = React.useState(new Animated.Value(Number(!!isShown)));

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: Number(!!isShown),
      duration: 150,
      delay: isShown ? 200 : 0,
      useNativeDriver: true,
    }).start();
  }, [isShown, opacity]);

  const containerStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.container,
        {
          backgroundColor: processColorDict[state],
          opacity,
        },
      ]),
    [state, opacity],
  );

  return (
    <Animated.View style={containerStyle}>
      <SharedText category="p1" style={styles.message}>
        {processMessageDict[state]}
      </SharedText>
      {state === EProcessState.Error && !!onReloadPress && (
        <Pressable onPress={onReloadPress} style={styles.reloadButton}>
          <SharedText category={'p1'} style={styles.reloadText}>
            Reload
          </SharedText>
        </Pressable>
      )}
    </Animated.View>
  );
};
