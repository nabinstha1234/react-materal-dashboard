import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { DataTable } from 'features/leave-management/components';
import styles from 'assets/style/styles';
import { useDispatch } from 'react-redux';
import { getLeaves } from 'features/leave-management/Api/leaveManagement';

const LeaveManagement = () => {
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    dispatch(getLeaves({}));
  }, [dispatch]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <Box>
      <Box className="page-head-section">
        <div>
          <div className="page-head">Leave Management</div>
          <span className="page-tag-line">
            Find all the leave applications from your employees here.
          </span>
        </div>
      </Box>
      <Box className="main-section">
        <div className="w-75 mb-4">
          <Tabs
            sx={styles.tabsStyle}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
            value={tabIndex}
            variant="fullWidth"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={styles.tabHead} label="All" {...a11yProps(0)} />
            <Tab sx={styles.tabHead} label="Pending" {...a11yProps(1)} />
            <Tab sx={styles.tabHead} label="Approved" {...a11yProps(2)} />
            <Tab sx={styles.tabHead} label="Rejected" {...a11yProps(3)} />
          </Tabs>
        </div>
        <DataTable tabIndex={tabIndex} />
      </Box>
    </Box>
  );
};

export default LeaveManagement;
