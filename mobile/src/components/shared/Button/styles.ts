import { StyleSheet } from 'react-native';
import { ColorTheme } from '@shared/ColorTheme';
import { shadowStyles } from '@shared/style/shadow';

export const styles = StyleSheet.create({
  container: {
    minWidth: 96,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorTheme.regular,
    borderRadius: 16,
    ...shadowStyles.intense,
  },
  text: {
    color: ColorTheme.white,
    textTransform: 'capitalize',
  },
});
