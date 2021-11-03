import { RootState } from '../store';

export const getStatus = (state: RootState) => state.post.status;
export const getCurrentPost = (state: RootState) => state.post.currentPost;
export const getComments = (state: RootState) => state.post.comments;
