import React from 'react';
import { Text } from 'react-native';
import { Paper } from '../../../../templates/Paper';

export type PostBodyProps = {
  body: string;
};

export const PostBody: React.FC<PostBodyProps> = ({ body }) => {
  return (
    <Paper>
      <Text>{body}</Text>
    </Paper>
  );
};
