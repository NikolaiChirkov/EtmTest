import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { IPost } from '../../../interfaces/entities/IPost';
import { PostCardStyles } from './PostCardStyles';
import { TextContainer } from './partials/TextContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../pages/HomePage';
import { Paper } from '../../templates/Paper';
import { useAppDispatch } from '../../../redux/hooks';
import { postActions } from '../../../redux/slicers/postSlicer';
import { deletePost } from '../../../redux/thunks/postListThunks';

export type PostCardProps = {
  post?: IPost;
  navigation?: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
};

export const PostCard: React.FC<PostCardProps> = ({ post, navigation }) => {
  const dispatch = useAppDispatch();

  if (!post?.body) {
    return null;
  }

  return (
    <Paper>
      <TextContainer
        date={new Date().toLocaleDateString('ru-ru')}
        title={post?.title}
        onPress={() => {
          dispatch(postActions.setCurrentPost(post));
          navigation?.navigate('Post');
        }}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(deletePost(post.id));
        }}>
        <Image
          style={PostCardStyles.icon}
          source={require('../../../../public/Bin.png')}
        />
      </TouchableOpacity>
    </Paper>
  );
};
