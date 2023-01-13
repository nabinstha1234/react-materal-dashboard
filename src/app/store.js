import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'features/auth/slice/AuthSlice';
import masterPageSlice from 'features/master-page/slice/MasterPageSlice';
import leaveManagementSlice from 'features/leave-management/slice/LeaveManagementSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    masterPage: masterPageSlice,
    leaveManagement: leaveManagementSlice,
  },
});
