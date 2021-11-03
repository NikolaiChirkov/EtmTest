import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PostList } from '../components/organisms/PostList';
import { Page } from '../components/templates/Page';

export type RootStackParamList = {
  Home: undefined;
  Post: undefined;
};

export type HomePageProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
};

export const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <Page>
      <PostList navigation={navigation} />
    </Page>
  );
};
