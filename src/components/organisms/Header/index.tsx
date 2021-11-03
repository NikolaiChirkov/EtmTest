import React from 'react';
import { Image, Text, View } from 'react-native';
import { HeaderStyles } from './HeaderStyles';

export const Header: React.FC = () => {
  return (
    <View style={HeaderStyles.container}>
      <Image
        style={HeaderStyles.icon}
        source={require('../../../../public/notepad.png')}
      />
      <Text style={HeaderStyles.text}>InPoster</Text>
    </View>
  );
};
