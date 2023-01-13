import React, { memo, useEffect, useState } from 'react';
import {
  Box,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  List,
  ListItem,
  Button,
  Badge,
} from '@mui/material';
import styles from 'assets/style/styles';
import { ResetPass } from '../ResetPass';
import { ActDeactModal } from '../ActDeactModal';
import { useNavigate } from 'react-router-dom';

function createData(_id, name, designation, status) {
  return { _id, name, designation, status };
}

let rows = [
  createData(1, 'Abhisekh Sahoo', 'Front-end Developer', 'active'),
  createData(2, 'Abhisekh Sahoo', 'Front-end Developer', 'inactive'),
  createData(3, 'Abhisekh Sahoo', 'Front-end Developer', 'active'),
  createData(4, 'Abhisekh Sahoo', 'Front-end Developer', 'active'),
  createData(5, 'Abhisekh Sahoo', 'Front-end Developer', 'inactive'),
];

const Row = memo(({ row, handleResetOpen, handleActDeactOpen }) => {
  const navigate = useNavigate();
  return (
    <ListItem className="justify-content-between">
      <Box className="d-flex">
        <ListItemAvatar sx={styles.listAvatar}>
          <Badge
            color="secondary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: row.status === 'active' ? '#05A24D' : '#F75B4F',
              },
            }}
            overlap="circular"
            badgeContent=""
          >
            <Avatar
              sx={{
                height: '48px',
                width: '48px',
              }}
              alt={row.name}
              src={row.avatar}
            />
          </Badge>
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
      <Box className="d-flex">
        <Button
          className="mx-1"
          sx={{
            '&:hover': {
              backgroundColor: '#0A68FF',
            },
          }}
          variant="contained"
          onClick={() => handleResetOpen(row)}
        >
          Reset Password
        </Button>
        <Button
          className="mx-2"
          variant="contained"
          sx={{
            backgroundColor: '#F7B44F',
            '&:hover': {
              backgroundColor: '#F7B44F',
            },
          }}
          onClick={() => {
            navigate(`/employee/${row._id}`);
          }}
        >
          Profile
        </Button>
        {row.status === 'active' ? (
          <Button
            sx={{
              width: '90px',
              backgroundColor: '#F75B4F',
              '&:hover': {
                backgroundColor: '#F75B4F',
              },
            }}
            className="mx-1"
            variant="contained"
            onClick={() => handleActDeactOpen(row)}
          >
            Deactivate
          </Button>
        ) : (
          <Button
            sx={{
              width: '90px',
              backgroundColor: '#05A24D',
              '&:hover': {
                backgroundColor: '#05A24D',
              },
            }}
            className="mx-1"
            variant="contained"
            onClick={() => handleActDeactOpen(row)}
          >
            Activate
          </Button>
        )}
      </Box>
    </ListItem>
  );
});

const EmployeeList = ({ tabIndex }) => {
  const [tabStatus, setTabStatus] = useState('all');
  const [selectedUser, setSelectedUser] = useState({});
  const [resetPassOpen, setResetPassOpen] = useState(false);
  const [actDeactOpen, setActDeactOpen] = useState(false);

  useEffect(() => {
    let tabStatus = tabIndex === 0 ? 'all' : tabIndex === 1 ? 'active' : 'inactive';
    setTabStatus(tabStatus);
  }, [tabIndex]);

  const handleResetOpen = (user) => {
    setResetPassOpen(true);
    setSelectedUser(user);
  };
  const handleActDeactOpen = (user) => {
    setActDeactOpen(true);
    setSelectedUser(user);
  };

  const handleResetClose = () => setResetPassOpen(false);
  const handleActDeactClose = () => setActDeactOpen(false);

  function getRows() {
    if (tabStatus === 'all') return rows;
    else return rows.filter((item) => item.status === tabStatus);
  }

  return (
    <Box>
      <List>
        {getRows().map((row) => {
          return (
            <Row
              row={row}
              handleResetOpen={handleResetOpen}
              handleActDeactOpen={handleActDeactOpen}
            />
          );
        })}
      </List>
      <ResetPass open={resetPassOpen} onClose={handleResetClose} />
      <ActDeactModal user={selectedUser} open={actDeactOpen} onClose={handleActDeactClose} />
    </Box>
  );
};

export default EmployeeList;
