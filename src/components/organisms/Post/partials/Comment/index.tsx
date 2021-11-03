import React from 'react';
import { Text } from 'react-native';
import { IComment } from '../../../../../interfaces/entities/IComment';
import { Paper } from '../../../../templates/Paper';
import { CommentStyles } from './CommentStyles';

export type CommentProps = {
  comment: IComment;
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Paper style={CommentStyles.container}>
      <Text style={CommentStyles.name}>{comment.name}</Text>
      <Text style={CommentStyles.body}>{comment.body}</Text>
    </Paper>
  );
};
