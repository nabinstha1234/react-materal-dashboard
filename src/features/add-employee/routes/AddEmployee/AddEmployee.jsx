import React from 'react';
import { Box, IconButton, Typography, Button, Select, MenuItem } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { ReactIcon } from 'components/molecules';
import { useNavigate } from 'react-router-dom';
import styles from 'assets/style/styles';

const AddEmployee = () => {
  const navigate = useNavigate();

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
          <div className="page-head">Add employee</div>
          <span className="page-tag-line">Add new employee here.</span>
        </div>
      </Box>
      <Box className="main-section">
        <div className="row py-5 pb-5">
          <div className=" col-md-4">
            <Typography sx={styles.inputLabel}>Employee Name</Typography>
            <input name="name" className="modal-input" type="text" />
          </div>
          <div className="col-md-4">
            <Typography sx={styles.inputLabel}>Designation</Typography>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={10}
              sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
              className="modal-input select-input"
              onChange={() => {}}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-md-4 align-self-end">
            <Button
              className="mx-1"
              sx={styles.btn}
              variant="contained"
              //   onClick={() => handleResetOpen(row)}
            >
              Save
            </Button>
            <Button className="mx-2" variant="outlined" sx={styles.btnOutlined}>
              Cancel
            </Button>
          </div>
        </div>
        <div className="row py-2 pb-5">
          <div className=" col-md-4">
            <Typography sx={styles.inputLabel}>Employee ID</Typography>
            <input name="empId" className="modal-input" type="text" />
          </div>
          <div className="col-md-4">
            <Typography sx={styles.inputLabel}>Password</Typography>
            <input name="empPass" className="modal-input" type="password" />
          </div>
        </div>
        <div className="row py-2 pb-5">
          <div className=" col-md-4">
            <Typography sx={styles.inputLabel}>Date of Joining</Typography>
            {/* <input name="empId" className="modal-input" type="text" /> */}
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                className="modal-input"
                // value={input.dateValue}
                onChange={(newValue) => {
                  // handleOnDateChange(newValue, index)
                }}
                renderInput={(params) => (
                  <span className="d-flex select-input align-items-center">
                    <input
                      className="modal-input"
                      readOnly
                      name="date"
                      //   value={input.date}
                      placeholder=" "
                      {...params}
                    />
                    {/* <img className='mr-20' src={DownICon} /> */}
                    <div className="mr-20">
                      <ReactIcon
                        color="#ABB6C7"
                        sx={{ height: '24px', width: '24px' }}
                        icon={'material-symbols:calendar-month-outline'}
                      />
                    </div>
                  </span>
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="col-md-4">
            <Typography sx={styles.inputLabel}>Date of Birth</Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                className="modal-input"
                // value={input.dateValue}
                onChange={(newValue) => {
                  // handleOnDateChange(newValue, index)
                }}
                renderInput={(params) => (
                  <span className="d-flex select-input align-items-center">
                    <input
                      className="modal-input"
                      readOnly
                      name="date"
                      //   value={input.date}
                      placeholder=" "
                      {...params}
                    />
                    {/* <img className='mr-20' src={DownICon} /> */}
                    <div className="mr-20">
                      <ReactIcon
                        color="#ABB6C7"
                        sx={{ height: '24px', width: '24px' }}
                        icon={'material-symbols:calendar-month-outline'}
                      />
                    </div>
                  </span>
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="row py-2 pb-5">
          <div className=" col-md-4">
            <Typography sx={styles.inputLabel}>Official Email Address</Typography>
            <span className="d-flex select-input align-items-center">
              <input name="empId" className="modal-input" type="email" />
              <div className="mr-20">
                <ReactIcon
                  color="#ABB6C7"
                  sx={{ height: '24px', width: '24px' }}
                  icon={'mdi:user-circle-outline'}
                />
              </div>
            </span>
          </div>
          <div className="col-md-4">
            <Typography sx={styles.inputLabel}>Personal Email Address</Typography>
            <span className="d-flex select-input align-items-center">
              <input name="empId" className="modal-input" type="email" />
              <div className="mr-20">
                <ReactIcon
                  color="#ABB6C7"
                  sx={{ height: '24px', width: '24px' }}
                  icon={'mdi:user-circle-outline'}
                />
              </div>
            </span>
          </div>
        </div>
        <div className="row py-2 pb-5">
          <div className=" col-md-4">
            <Typography sx={styles.inputLabel}>Phone number</Typography>
            <span className="d-flex select-input align-items-center">
              <input name="empId" className="modal-input" type="email" />
              <div className="mr-20">
                <ReactIcon
                  color="#ABB6C7"
                  sx={{ height: '24px', width: '24px' }}
                  icon={'material-symbols:call-outline'}
                />
              </div>
            </span>
          </div>
          <div className="col-md-4">
            <Typography sx={styles.inputLabel}>Reporting Person Name</Typography>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={10}
              sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
              className="modal-input select-input"
              onChange={() => {}}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default AddEmployee;
