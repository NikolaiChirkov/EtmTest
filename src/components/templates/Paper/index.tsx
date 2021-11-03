import React from 'react';
import { View, ViewStyle } from 'react-native';
import { PaperStyles } from './PaperStyles';

export type PaperProps = {
  style?: ViewStyle;
};

export const Paper: React.FC<PaperProps> = ({ children, style }) => {
  return <View style={{ ...PaperStyles.container, ...style }}>{children}</View>;
};
