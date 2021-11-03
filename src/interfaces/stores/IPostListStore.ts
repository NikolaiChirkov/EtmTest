import { IPost } from '../entities/IPost';

export interface IPostListStore {
  posts: IPost[];
  status: 'loading' | 'succeeded' | 'failed';
  lastPostId: number;
}
