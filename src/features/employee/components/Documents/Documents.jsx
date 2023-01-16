import React, { memo } from 'react';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { ReactIcon } from 'components/molecules';
import styles from 'assets/style/styles';

function createData(name, file, date, size, type) {
  return { name, file, date, size, type };
}

let rows = [
  createData('Graduation Certificate', 'Grad_cert', '01/10/2022', '10KB', 'pdf'),
  createData('H.S Marksheet', 'H.S_marksheet', '01/10/2022', '10KB', 'pdf'),
  createData('Adhaar Card', 'Adhaar', '01/10/2022', '10KB', 'pdf'),
  createData('Pan Card', 'pancard', '01/10/2022', '10KB', 'pdf'),
  createData('Bank Passbook', 'bank_passbook', '01/10/2022', '10KB', 'pdf'),
];

const Row = memo(({ row }) => {
  return (
    <ListItem className="border-bottom">
      <Box className="w-100">
        <Typography sx={{ color: '#000F28', fontWeight: '500' }}>{row.name}</Typography>
        <Box className="w-100 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center col-2">
            <ReactIcon
              color="#F75B4F"
              sx={{ marginRight: '10px' }}
              icon={'material-symbols:picture-as-pdf-outline'}
            />
            <Typography sx={{ color: '#000F28', fontWeight: '600' }} className="m-0">
              {row.file}
            </Typography>
          </div>
          <Typography sx={{ color: '#000F28', fontWeight: '600' }}>{row.date}</Typography>
          <Typography sx={{ color: '#000F28', fontWeight: '600' }}>{row.size}</Typography>
          <Typography sx={{ color: '#000F28', fontWeight: '600' }}>{row.type}</Typography>
          <Button sx={styles.btn} variant="contained">
            Download
          </Button>
          <Button sx={styles.btnOutlined} variant="outlined">
            Re-upload
          </Button>
        </Box>
      </Box>
    </ListItem>
  );
});

const Documents = ({ value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      //   {...other}
    >
      {value === index && (
        <Box>
          <List>
            {rows.map((item) => (
              <Row row={item} />
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default Documents;
