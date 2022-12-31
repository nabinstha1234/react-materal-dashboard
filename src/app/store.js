import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'features/auth/slice/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
