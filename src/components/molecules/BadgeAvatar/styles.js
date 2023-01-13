import { styled } from '@mui/material/styles';

export const SmallAvatar = styled('div')(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: theme.palette.common.white,
  marginLeft: theme.spacing(-2),
  marginTop: theme.spacing(-2),
}));
