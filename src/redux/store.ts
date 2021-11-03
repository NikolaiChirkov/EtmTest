import { configureStore } from '@reduxjs/toolkit';
import { postListReducer } from './slicers/postListSlicer';
import { postReducer } from './slicers/postSlicer';

const store = configureStore({
  reducer: {
    postList: postListReducer,
    post: postReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
