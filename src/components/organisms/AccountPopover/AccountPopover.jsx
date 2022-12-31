import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from '@mui/material';
import { ReactIcon } from 'components/molecules';

const MENU_OPTIONS = [
  {
    label: 'View Profile',
    icon: 'material-symbols:person-outline',
  },
  {
    label: 'Change Password',
    icon: 'material-symbols:lock-outline',
  },
];

const AccountPopover = () => {
  const [open, setOpen] = useState(null);

  const { userResponse } = useSelector((state) => state.auth);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={userResponse?.profile_url} alt="photoURL">
          {userResponse?.profile_url ? '' : userResponse?.username[0]}
        </Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {userResponse.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userResponse.role}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              <ReactIcon icon={option.icon} /> &nbsp; {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          <ReactIcon icon="material-symbols:logout-rounded" /> &nbsp; Logout
        </MenuItem>
      </Popover>
    </>
  );
};

export default AccountPopover;
