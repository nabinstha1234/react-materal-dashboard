import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { ViewProfileForm, ReactModal } from 'components/organisms';
import { removeToken } from 'utils/token';
import config from 'config';

const MENU_OPTIONS_CONST = {
  profile: 'profile',
  changePassword: 'changePassword',
};

const MENU_OPTIONS = [
  {
    value: MENU_OPTIONS_CONST.profile,
    label: 'View Profile',
    icon: 'material-symbols:person-outline',
  },
  {
    value: MENU_OPTIONS_CONST.changePassword,
    label: 'Change Password',
    icon: 'material-symbols:lock-outline',
  },
];

const AccountPopover = () => {
  const [open, setOpen] = useState(null);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const { userResponse } = useSelector((state) => state.auth);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClick = (value) => {
    if (value === MENU_OPTIONS_CONST.profile) {
      setOpenProfileModal(true);
    }
    if (value === MENU_OPTIONS_CONST.changePassword) {
      navigate('/change-password');
    }
    setOpen(null);
  };

  const handleLogout = () => {
    removeToken({
      name: config.tokenName,
    });
    removeToken({
      name: config.refreshTokenName,
    });
    setOpen(null);
    navigate('/login');
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
          {userResponse?.profile_url ? '' : userResponse?.username?.[0]}
        </Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={() => setOpen(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 210,
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
            <MenuItem
              key={option.label}
              sx={{
                color: theme.palette.primary.darker,
              }}
              onClick={() => handleClick(option.value)}
            >
              <ReactIcon
                icon={option.icon}
                height={20}
                width={20}
                sx={{
                  color: theme.palette.primary.darker,
                }}
              />
              &nbsp; {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1, color: theme.palette.primary.darker }}>
          <ReactIcon
            icon="material-symbols:logout-rounded"
            sx={{
              color: theme.palette.primary.darker,
            }}
            height={20}
            width={20}
          />
          &nbsp; Logout
        </MenuItem>
      </Popover>
      <ReactModal
        fullWidth
        maxWidth="lg"
        open={openProfileModal}
        title={
          <Stack>
            <Typography sx={{ ...theme.typography.h2, color: theme.palette.primary.darker }}>
              Profile
            </Typography>
            <Typography sx={{ ...theme.typography.subtitle1, color: theme.palette.error.light }}>
              Note: To do any changes please contact admin
            </Typography>
          </Stack>
        }
        handleClose={() => setOpenProfileModal(false)}
      >
        <ViewProfileForm />
      </ReactModal>
    </>
  );
};

export default AccountPopover;
