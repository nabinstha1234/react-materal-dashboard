import React, { memo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

function createData(name, designation, punchIn, punchOut, call, msg, status) {
  return { name, designation, punchIn, punchOut, call, msg, status };
}

const rows = [
  createData('Abhisekh Sahoo', 'Front-end Developer', '09:30 AM', '04:30 PM', 24, 4.0, 'present'),
  createData('Abhisekh Sahoo', 'Front-end Developer', '09:30 AM', '04:30 PM', 37, 4.3, 'late'),
  createData('Abhisekh Sahoo', 'Front-end Developer', '09:30 AM', '04:30 PM', 24, 6.0, 'absent'),
  createData('Abhisekh Sahoo', 'Front-end Developer', '09:30 AM', '04:30 PM', 67, 4.3, 'present'),
  createData('Abhisekh Sahoo', 'Front-end Developer', '09:30 AM', '04:30 PM', 49, 3.9, 'late'),
];

const Row = memo(({ row }) => {
  return (
    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th">
        <Box className="d-flex">
          <ListItemAvatar sx={styles.listAvatar}>
            <Avatar
              sx={{
                height: '48px',
                width: '48px',
              }}
              alt={row.name}
              src={row.avatar}
            />
          </ListItemAvatar>
          <Box>
            <ListItemText sx={styles.avatarName} primary={row.name} className="align-self-center" />
            <Box>
              <Typography sx={styles.avatarSubHead} component="p" color="text.primary">
                {row.designation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Chip sx={styles.chip} label={row.punchIn} variant="outlined" />
      </TableCell>
      <TableCell align="left">
        <Chip sx={styles.chip} label={row.punchOut} variant="outlined" />
      </TableCell>
      <TableCell align="left">
        <IconButton
          sx={{
            backgroundColor: '#0A68FF',
            borderRadius: '8px',
            '&:hover': {
              background: 'rgba(10,104,255,0.8)',
            },
          }}
        >
          <ReactIcon color="#fff" icon={'material-symbols:call-outline'} />
        </IconButton>
        {/* {row.call} */}
      </TableCell>
      <TableCell align="left">
        <IconButton
          sx={{
            backgroundColor: '#0A68FF',
            borderRadius: '8px',
            '&:hover': {
              background: 'rgba(10,104,255,0.8)',
            },
          }}
        >
          <ReactIcon color="#fff" icon={'ic:outline-message'} />
        </IconButton>
        {/* {row.msg} */}
      </TableCell>
      <TableCell align="left">
        <div className="d-flex">
          <div className="col-4">
            <Chip
              onClick={() => console.log('clicked')}
              sx={[
                styles.chip,
                {
                  width: '96px',
                  backgroundColor: row.status === 'present' ? '#05A24D' : '#fff',
                  color: row.status === 'present' ? '#fff' : '#05A24D',
                  borderColor: '#05A24D',
                  '&&:hover': {
                    background: row.status === 'present' ? '#05A24D' : '#FFF',
                  },
                },
              ]}
              label={'Present'}
              variant="outlined"
            />
          </div>
          <div className="col-4">
            <Chip
              onClick={() => console.log('clicked')}
              sx={[
                styles.chip,
                {
                  width: '96px',
                  backgroundColor: row.status === 'late' ? '#FFBA07' : '#fff',
                  color: row.status === 'late' ? '#fff' : '#FFBA07',
                  borderColor: '#FFBA07',
                  '&&:hover': {
                    background: row.status === 'late' ? '#FFBA07' : '#FFF',
                  },
                },
              ]}
              label={'Late'}
              variant="outlined"
            />
          </div>
          <div className="col-4">
            <Chip
              onClick={() => console.log('clicked')}
              sx={[
                styles.chip,
                {
                  width: '96px',
                  backgroundColor: row.status === 'absent' ? '#F75B4F' : '#fff',
                  color: row.status === 'absent' ? '#fff' : '#F75B4F',
                  borderColor: '#F75B4F',
                  '&&:hover': {
                    background: row.status === 'absent' ? '#F75B4F' : '#FFF',
                  },
                },
              ]}
              label={'Absent'}
              variant="outlined"
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
});

const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell sx={[styles.tableHead, styles.bgWhite]}>EMPLOYEE</TableCell>
            <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left" size="small">
              PUNCH-IN TIME
            </TableCell>
            <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
              PUNCH-OUT TIME
            </TableCell>
            <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
              CALL
            </TableCell>
            <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
              MESSAGE
            </TableCell>
            <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
              STATUS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return <Row row={row} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
