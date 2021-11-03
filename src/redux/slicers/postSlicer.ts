import { createSlice } from '@reduxjs/toolkit';
import { IPostStore } from '../../interfaces/stores/IPostStore';
import { fetchComments } from '../thunks/postThunks';

const initialState: IPostStore = {
  comments: [],
  currentPost: null,
  status: 'loading',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      });
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
