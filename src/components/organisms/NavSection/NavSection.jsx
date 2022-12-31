import { matchPath, useLocation } from 'react-router-dom';
import { Box, List } from '@mui/material';
import { useSelector } from 'react-redux';

import NavItem from './NavItem';

const NavSection = ({ navConfig, other }) => {
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath(path, pathname) : false);
  const {
    userResponse: { role },
  } = useSelector((state) => state.auth);

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => {
          if (item.roles.includes(role)) {
            return <NavItem key={item.title} item={item} active={match} />;
          }
          return null;
        })}
      </List>
    </Box>
  );
};

export default NavSection;
