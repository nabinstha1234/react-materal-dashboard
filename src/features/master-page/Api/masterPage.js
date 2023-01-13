import { createAsyncThunk } from '@reduxjs/toolkit';
import MasterPageService from './masterPageService';

export const getHolidays = createAsyncThunk('masterPage/setHolidays', async (args) => {
    const response = await MasterPageService.getHolidays();
    return response;
});

export const getLeaveTypes = createAsyncThunk('masterPage/setLeaveTypes', async () => {
    const response = await MasterPageService.getLeaves();
    return response;
});
export const getProjects = createAsyncThunk('masterPage/setProjects', async () => {
    const response = await MasterPageService.getProjects();
    return response;
});