import { Dimensions } from 'react-native';

export const getSmallerDimensionValue = (): number => {
  const { height, width } = Dimensions.get('screen');
  return Math.min(height, width);
};
