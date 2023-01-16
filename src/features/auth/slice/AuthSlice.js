import { createSlice } from '@reduxjs/toolkit';

import { getCurrentUser, logout } from '../Api/auth';

const initialState = {
  userResponse: {},
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
      state.error = null;
      state.userResponse = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get Current users
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.userResponse = {
        ...action.payload,
        role: action.payload.role
      };
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getCurrentUser.rejected, (state) => {
      state.loading = false;
      state.error = null;
    });

    // logout user
    builder.addCase(logout.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userResponse = {};
      state.loading = false;
      state.error = null;
    });

    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export const { login } = authSlice.actions;

// export const getAllBooks = (state) => state.auth;
export default authSlice.reducer;
