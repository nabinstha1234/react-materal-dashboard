import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';

import { Logo } from 'components/molecules';
import { NavSection } from 'components/organisms';
import { useResponsive } from 'hooks';
import sidebarConfig from 'config/SidebarConfig';

import { RootStyle, DRAWER_WIDTH } from './style';

const DashbordSidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg', '', '');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <div>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo type="text" />
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </div>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.common.white',
              borderRightStyle: `1px solid palette.primary.light`,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
};

export default DashbordSidebar;
