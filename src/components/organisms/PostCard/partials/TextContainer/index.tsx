import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TextContainerStyles } from './TextContainer';

export type PostCardProps = {
  date: string;
  title?: string;
  onPress: () => void;
};

export const TextContainer: React.FC<PostCardProps> = ({
  date,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={TextContainerStyles.container} onPress={onPress}>
      <Text style={TextContainerStyles.date}>{date}</Text>
      {title && <Text style={TextContainerStyles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};
