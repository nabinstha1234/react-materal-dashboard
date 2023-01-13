import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import styles from 'assets/style/styles';

const Profile = ({ value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      //   {...other}
    >
      {value === index && (
        <Box className="row padding-24">
          <div className="col-3">
            <div className="d-flex flex-column align-items-center w-75">
              <Avatar
                sx={{
                  height: '160px',
                  width: '160px',
                }}
                alt={'Profile image'}
                src={''}
              />
              <div className="text-center py-3">
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '24px',
                    lineHeight: '29px',
                    color: '#092E69',
                  }}
                  className="pb-2"
                >
                  Abhisekh Sahoo
                </Typography>
                <span className="page-tag-line">Software Developer</span>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row pb-5">
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Employee ID</Typography>
                <input name="empId" value={'1901106374'} className="modal-input" type="text" />
              </div>
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Designation</Typography>
                <input
                  name="empId"
                  value={'Software Engineers'}
                  className="modal-input"
                  type="text"
                />
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Date of Joining</Typography>
                <input name="empId" value={'01/02/2005'} className="modal-input" type="text" />
              </div>
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Date of Birth</Typography>
                <input name="empId" value={'01/02/1990'} className="modal-input" type="text" />
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Official Email Address</Typography>
                <input name="empId" value={'xyz@company.in'} className="modal-input" type="text" />
              </div>
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Personal Email Address</Typography>
                <input name="empId" value={'xyz@gmail.com'} className="modal-input" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Phone Number</Typography>
                <input name="empId" value={'9344789362'} className="modal-input" type="text" />
              </div>
              <div className="col-md-6">
                <Typography sx={styles.inputLabel}>Reporting Person Name</Typography>
                <input name="empId" value={'Anjan Naik'} className="modal-input" type="text" />
              </div>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Profile;
