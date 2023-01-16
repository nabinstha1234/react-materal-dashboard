import { createSlice } from '@reduxjs/toolkit';
import { getHolidays, getLeaveTypes, getProjects } from '../Api/masterPage';
const initialState = {
    holidays: [],
    leaveTypes: [],
    projects: [],
    loading: false,
    error: null,
};

export const masterPageSlice = createSlice({
    name: 'masterPage',
    initialState,
    reducers: {
        setHolidays: (state, action) => {
            state.holidays = action.payload;
        },
        setLeaveTypes: (state, action) => {
            state.leaveTypes = action.payload;
        }
    },
    extraReducers: (builder) => {
        // get Current users
        builder.addCase(getHolidays.fulfilled, (state, action) => {
            state.holidays = action.payload.holidays;
        });
        builder.addCase(getLeaveTypes.fulfilled, (state, action) => {
            state.leaveTypes = action.payload.LeaveTypes; // change it later on
            //   state.loading = false;
            //   state.error = null;
        });
        builder.addCase(getProjects.fulfilled, (state, action) => {
            state.projects = action.payload; // change it later on
            //   state.loading = false;
            //   state.error = null;
        });
    },
});

export const { setHolidays, setLeaveTypes } = masterPageSlice.actions;

// export const getAllBooks = (state) => state.auth;
export default masterPageSlice.reducer;
