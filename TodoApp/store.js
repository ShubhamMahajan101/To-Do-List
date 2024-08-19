import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';
import postsReducer from './features/postsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    posts: postsReducer,
  },
});

export default store;
