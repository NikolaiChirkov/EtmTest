import { createSlice } from '@reduxjs/toolkit';
import { IPostListStore } from '../../interfaces/stores/IPostListStore';
import { fetchPosts, deletePost } from '../thunks/postListThunks';

const initialState: IPostListStore = {
  posts: [],
  lastPostId: 0,
  status: 'loading',
};

const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
        state.lastPostId += 5;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.posts = state.posts.filter(post => post.id !== action.payload);
      });
  },
});

export const postListActions = postListSlice.actions;
export const postListReducer = postListSlice.reducer;
