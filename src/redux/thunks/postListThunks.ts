import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPosts = createAsyncThunk(
  'postList/fetchPostList',
  async (startId: number) => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts?_start=${startId}&_limit=5`,
      {
        method: 'GET',
        headers: {},
      },
    );

    return response.json();
  },
);

const deletePost = createAsyncThunk(
  'postList/deletePost',
  async (id: number) => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
        headers: {},
      },
    );

    return id;
  },
);

export { fetchPosts, deletePost };
