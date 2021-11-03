import React from 'react';
import { Post } from '../components/organisms/Post';
import { Page } from '../components/templates/Page';

export const PostPage: React.FC = () => {
  return (
    <Page>
      <Post />
    </Page>
  );
};
