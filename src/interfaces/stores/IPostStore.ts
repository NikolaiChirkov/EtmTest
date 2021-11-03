import { IComment } from '../entities/IComment';
import { IPost } from '../entities/IPost';

export interface IPostStore {
  comments: IComment[];
  currentPost: IPost | null;
  status: 'loading' | 'succeeded' | 'failed';
}
