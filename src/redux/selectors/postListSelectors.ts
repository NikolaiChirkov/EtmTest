import { RootState } from '../store';

export const selectAllPosts = (state: RootState) => state.postList.posts;
export const getStatus = (state: RootState) => state.postList.status;
export const getlastPostId = (state: RootState) => state.postList.lastPostId;
