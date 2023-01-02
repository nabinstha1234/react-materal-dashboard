import { styled } from '@mui/material/styles';

import { Page } from 'components/molecules';

export const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  backgroundColor: theme.palette.primary.lighter,
}));

export const ContentWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.common.white,
}));

export const ContentStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  maxWidth: 400,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '60%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 12),
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.primary.lighter,
}));
