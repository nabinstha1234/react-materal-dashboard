import { createAsyncThunk } from '@reduxjs/toolkit';
import LeaveManagementService from './leaveManagementService';

export const getLeaves = createAsyncThunk('leaveManagement/setLeaves', async (args) => {
    const response = await LeaveManagementService.getLeaves();
    return response;
});