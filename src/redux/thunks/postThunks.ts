import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchComments = createAsyncThunk(
  'postList/getComments',
  async (id: number) => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/comments?postId=${id}`,
      {
        method: 'GET',
        headers: {},
      },
    );

    return response.json();
  },
);

export { fetchComments };
