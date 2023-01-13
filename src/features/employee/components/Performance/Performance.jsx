import React from 'react';
import { Avatar, Box, Chip, IconButton, Typography } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Present', 'Absent'],
  datasets: [
    {
      label: '',
      data: [65, 35],
      backgroundColor: ['#0A68FF', '#F3F5F9'],
      borderWidth: 0,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      ltr: true,

      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 30,
        font: {
          size: 16,
          family: 'Montserrat',
          weight: '500',
          color: '#000F28',
        },
      },
    },
  },
};

const Performance = ({ value, index }) => {
  return (
    <div
      role="tabpanel"
      className="mt-4"
      style={{ height: '100%' }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      //   {...other}
    >
      {value === index && (
        <Box className="row">
          <div className="col-3 px-0">
            <div className="d-flex border-top flex-column align-items-center w-100 py-4">
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
                <span className="page-tag-line mb-4">Software Developer</span>
                <div className="py-3">
                  <Chip
                    sx={[
                      styles.chip,
                      { fontSize: '16px', backgroundColor: '#0A68FF', color: '#fff' },
                    ]}
                    label={'4.5'}
                    icon={
                      <ReactIcon
                        color="#fff"
                        sx={{ height: '15px', width: '15px' }}
                        icon="material-symbols:star"
                      />
                    }
                    variant="filled"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 px-0 border-top">
            <div className="d-flex justify-content-between padding-24">
              <Typography sx={{ color: '#092E69', fontSize: '18px', fontWeight: '600' }}>
                Employee’s Attendance (In Percentage)
              </Typography>
              <div className="d-flex align-items-center">
                <IconButton
                  sx={{
                    backgroundColor: '#0A68FF',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#0A68FF',
                    },
                  }}
                >
                  <ReactIcon color="#fff" icon={'material-symbols:chevron-left'} />
                </IconButton>
                <Typography
                  className="px-3"
                  sx={{ color: '#092E69', fontSize: '18px', fontWeight: '600' }}
                >
                  June 2022
                </Typography>
                <IconButton
                  sx={{
                    backgroundColor: '#0A68FF',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#0A68FF',
                    },
                  }}
                >
                  <ReactIcon color="#fff" icon={'material-symbols:chevron-right'} />
                </IconButton>
              </div>
            </div>
            <div className="d-flex w-50 pt-5">
              <Pie
                options={options}
                data={data}
                height={'500px'}
                width={'500px'}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Performance;
