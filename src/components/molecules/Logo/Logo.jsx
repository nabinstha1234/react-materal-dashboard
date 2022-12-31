import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

import logo from 'assets/images/svg/logo.svg';

export const Logo = ({ styles }) => {
  return (
    <RouterLink to="/">
      <Box component="img" src={logo} sx={{ height: 40, ...styles }} />
    </RouterLink>
  );
};
