import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../../utils/types';
import { postList } from '../../data';
import { RootState } from '../../store';

type PostState = {
  posts: Post[];
};
const initialState: PostState = {
  posts: postList,
};
export const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<PostState>) => {
      state.posts = action.payload.posts;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts?.push(action.payload);
    },
    getPost: (state, action: PayloadAction<string>) => {
      state.posts?.find((post) => post.id !== action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      state.posts?.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts?.filter((post) => post.id !== action.payload);
    },
  },
});

export const { getPosts, addPost, getPost, updatePost, deletePost } =
  postSlice.actions;
export const selectPosts = (state: RootState) => state.post.posts;

export default postSlice.reducer;
