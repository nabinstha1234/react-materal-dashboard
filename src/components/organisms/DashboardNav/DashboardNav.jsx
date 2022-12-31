import React from 'react';
import { Box, Stack, IconButton } from '@mui/material';

import { ReactIcon } from 'components/molecules';
import { AccountPopover, NotificationsPopover } from 'components/organisms';

import { RootStyle, ToolbarStyle } from './styles';

const DashboradNav = ({ onOpenSideBar }) => {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSideBar}
          sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
        >
          <ReactIcon icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default DashboradNav;
