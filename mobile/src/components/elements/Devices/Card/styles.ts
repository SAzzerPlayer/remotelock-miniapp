import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flexWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: -8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  lockIcon: {
    width: 40,
    aspectRatio: 1,
    marginRight: 8,
  },
  avatar: {
    borderWidth: 3,
  },
});
