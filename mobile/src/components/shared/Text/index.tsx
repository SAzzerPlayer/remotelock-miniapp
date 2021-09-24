import React from 'react';
import { Text, TextProps } from 'react-native';
import { TSharedTextProp } from './options';
import { getSharedTextStyle } from './styles';

interface ISharedTextProps extends TextProps {
  category: TSharedTextProp;
}

export const SharedText: React.FC<ISharedTextProps> = ({
  category,
  style,
  ...textProps
}) => (
  <Text
    {...textProps}
    style={
      style
        ? [getSharedTextStyle(category), style]
        : getSharedTextStyle(category)
    }
  />
);
