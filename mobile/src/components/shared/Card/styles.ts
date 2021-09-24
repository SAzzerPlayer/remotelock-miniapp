import { StyleSheet } from 'react-native';
import { ColorTheme } from '@shared/ColorTheme';
import { shadowStyles } from '@shared/style/shadow';
import { getSmallerDimensionValue } from '@shared/utils/getSmallerDimensionValue';

const AVATAR_SIZE = Math.round(Math.min(getSmallerDimensionValue() * 0.3, 192));

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: ColorTheme.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    ...shadowStyles.low,
  },
  avatar: {
    width: AVATAR_SIZE,
    aspectRatio: 1,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 1,
    borderColor: ColorTheme['back-3'],
    backgroundColor: ColorTheme['back-2'],
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },
  hintText: {
    color: ColorTheme['hint-1'],
    marginTop: 2,
  },
});
