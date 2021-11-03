import React from 'react';
import { View } from 'react-native';
import { PageStyles } from './PageStyles';

export const Page: React.FC = ({ children }) => {
  return <View style={PageStyles.container}>{children}</View>;
};
