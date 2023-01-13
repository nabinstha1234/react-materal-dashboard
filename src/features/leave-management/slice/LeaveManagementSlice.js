import { createSlice } from '@reduxjs/toolkit';
import { getLeaves } from '../Api/leaveManagement';
const initialState = {
    leaves: [],
    loading: false,
    error: null,
};

export const leaveManagementSlice = createSlice({
    name: 'leaveManagement',
    initialState,
    reducers: {
        setLeaves: (state, action) => {
            state.leaves = action.payload.LeaveApplications;
        },
    },
    extraReducers: (builder) => {
        // get Current users
        builder.addCase(getLeaves.fulfilled, (state, action) => {
            state.leaves = action.payload.LeaveApplications;
        });
    },
});

export const { setLeaves } = leaveManagementSlice.actions;

// export const getAllBooks = (state) => state.auth;
export default leaveManagementSlice.reducer;
