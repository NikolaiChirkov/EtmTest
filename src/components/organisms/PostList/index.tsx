import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator, VirtualizedList } from 'react-native';
import { RootStackParamList } from '../../../pages/HomePage';
import {
  selectAllPosts,
  getStatus,
  getlastPostId,
} from '../../../redux/selectors/postListSelectors';
import { PostCard } from '../PostCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchPosts } from '../../../redux/thunks/postListThunks';
import { IPost } from '../../../interfaces/entities/IPost';

export type PostListProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
};

export const PostList: React.FC<PostListProps> = ({ navigation }) => {
  const status = useAppSelector(getStatus);
  const posts = useAppSelector(selectAllPosts);
  const lastPostId = useAppSelector(getlastPostId);

  const dispatch = useAppDispatch();

  const getItem = (data: IPost[], index: number) => {
    return { ...data[index] };
  };

  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchPosts(lastPostId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VirtualizedList
      data={posts}
      initialNumToRender={5}
      renderItem={({ item }) => (
        <PostCard post={item} navigation={navigation} />
      )}
      keyExtractor={data => data.id.toString()}
      getItemCount={data => data.length}
      getItem={getItem}
      ListFooterComponent={
        status === 'loading' ? <ActivityIndicator size="large" /> : undefined
      }
      onEndReached={() =>
        status !== 'loading' && dispatch(fetchPosts(lastPostId))
      }
      onEndReachedThreshold={0.01}
    />
  );
};
