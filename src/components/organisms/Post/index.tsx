import React, { useEffect } from 'react';
import { Text, ScrollView, ActivityIndicatorComponent } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  getComments,
  getCurrentPost,
} from '../../../redux/selectors/postSelectors';
import { fetchComments } from '../../../redux/thunks/postThunks';
import { Comment } from './partials/Comment';
import { PostBody } from './partials/PostBody';
import { PostStyles } from './PostStyles';

export const Post: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPost = useAppSelector(getCurrentPost);
  const comments = useAppSelector(getComments);

  useEffect(() => {
    dispatch(fetchComments(currentPost?.id as number));
  }, [currentPost?.id, dispatch]);

  if (!currentPost) {
    return null;
  }

  return (
    <ScrollView>
      <Text style={PostStyles.title}>О чем пост:</Text>
      <PostBody body={currentPost.body} />
      <Text style={PostStyles.title}>Комментарии</Text>
      {comments ? (
        comments.map(comment => <Comment comment={comment} key={comment.id} />)
      ) : (
        <ActivityIndicatorComponent size="large" />
      )}
    </ScrollView>
  );
};
