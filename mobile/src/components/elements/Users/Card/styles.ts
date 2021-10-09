import { StyleSheet } from 'react-native';
import { ColorTheme } from '@shared/ColorTheme';

export const styles = StyleSheet.create({
  statusPosition: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: -8,
  },
  periodText: { color: ColorTheme['hint-1'], marginVertical: 4 },
  statusBadge: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  status: { textTransform: 'uppercase' },
  avatar: {
    borderWidth: 3,
  },
});
