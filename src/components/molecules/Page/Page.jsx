import { forwardRef } from 'react';
import { Box } from '@mui/material';

export const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <title>{title}</title>
    {children}
  </Box>
));
