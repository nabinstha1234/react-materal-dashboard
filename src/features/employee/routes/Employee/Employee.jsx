import React, { useState } from 'react';
import { Box, IconButton, Tabs, Tab } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactIcon } from 'components/molecules';
import styles from 'assets/style/styles';
import { Documents, Performance, Profile, Salary } from 'features/employee/components';
import { Attendance } from 'features/employee/components/Attendance';

const Employee = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [tabIndex, setTabIndex] = useState(0);

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
      <Box className="mb-0 d-flex align-items-center " sx={{ paddingLeft: '24px' }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ border: '0.2px solid #848D96', borderRadius: '8px' }}
        >
          <ReactIcon icon={'material-symbols:chevron-left'} />
        </IconButton>
        <span className="px-2" style={{ color: '#848D96', fontSize: '20px' }}>
          Back
        </span>
      </Box>
      <Box className="page-head-section">
        <div>
          <div className="page-head">Abhisek Sahoo</div>
          <span className="page-tag-line">Full-Stack Developer</span>
        </div>
      </Box>
      <Box className="main-section">
        <Tabs
          sx={styles.tabsStyle}
          TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
          value={tabIndex}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="profile-tabs"
          className="border-bottom"
        >
          <Tab sx={styles.tabHead} label="Profile" {...a11yProps(0)} />
          <Tab sx={styles.tabHead} label="Attendance" {...a11yProps(1)} />
          <Tab sx={styles.tabHead} label="Timesheet" {...a11yProps(2)} />
          <Tab sx={styles.tabHead} label="Performance" {...a11yProps(3)} />
          <Tab sx={styles.tabHead} label="Documents" {...a11yProps(4)} />
          <Tab sx={styles.tabHead} label="Salary" {...a11yProps(5)} />
        </Tabs>
        <Profile value={tabIndex} index={0} />
        <Attendance value={tabIndex} index={1} />
        <Performance value={tabIndex} index={3} />
        <Documents value={tabIndex} index={4} />
        <Salary value={tabIndex} index={5} />
      </Box>
    </Box>
  );
};

export default Employee;
