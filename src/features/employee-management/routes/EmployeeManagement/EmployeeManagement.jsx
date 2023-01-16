import React, { useState } from 'react';
import { Box, Tabs, Tab, Button } from '@mui/material';
import { EmployeeList } from 'features/employee-management/components';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';
import { useNavigate } from 'react-router-dom';

const EmployeeManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

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
          <div className="page-head">Employee</div>
          <span className="page-tag-line">Here you can manage employees</span>
        </div>
        <Box>
          <Button
            endIcon={<ReactIcon icon={'material-symbols:add'} />}
            variant="contained"
            sx={styles.btn}
            onClick={() => navigate('/add-employee')}
          >
            Add Employee
          </Button>
        </Box>
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
            <Tab sx={styles.tabHead} label="Active" {...a11yProps(1)} />
            <Tab sx={styles.tabHead} label="Inactive" {...a11yProps(2)} />
          </Tabs>
        </div>
        <EmployeeList tabIndex={tabIndex} />
      </Box>
    </Box>
  );
};

export default EmployeeManagement;
