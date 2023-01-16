import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { DataTable } from 'features/daily-report/components';

const DailyReport = () => {
  const [filterData, setFilterData] = useState({
    dateVal: new Date(),
    date: moment(new Date()).format('Do MMM YYYY'),
  });

  const onValChange = (val) => {
    setFilterData({
      dateVal: val,
      date: moment(val).format('Do MMM YYYY'),
    });
    // newInputs[index]['holidayDate'] = val.unix() * 1000;
  };

  return (
    <Box>
      <Box className="page-head-section">
        <div>
          <div className="page-head">Daily Report</div>
          <span className="page-tag-line">Manage your employee’s daily report</span>
        </div>
        <div className="d-flex justify-content-end">
          <div className="col-5">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {/* <DesktopDatePicker
                className="modal-input"
                value={filterDate}
                onChange={(newValue) => {
                  setFilterDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="modal-input" readOnly placeholder="Select" {...params} />
                )}
              /> */}
              <MobileDatePicker
                className="modal-input"
                value={filterData.dateVal}
                onChange={(newValue) => {
                  onValChange(newValue);
                }}
                renderInput={(params) => (
                  <span className="d-flex align-items-center">
                    <input
                      // className=""
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #ABB6C7',
                        borderRadius: '16px',
                      }}
                      readOnly
                      name="date"
                      value={filterData.date}
                      {...params}
                    />
                  </span>
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="col-7" style={{ display: 'contents' }}>
            <Button
              endIcon={<ReactIcon icon={'ic:baseline-download'} />}
              variant="contained"
              sx={[styles.btn, styles.marginLeft20]}
            >
              Daily Report
            </Button>
          </div>
        </div>
      </Box>
      <Box className="main-section">
        <DataTable />
      </Box>
    </Box>
  );
};

export default DailyReport;
