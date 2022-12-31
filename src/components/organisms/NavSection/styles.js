import { styled } from '@mui/material/styles';
import { ListItemIcon, ListItemButton } from '@mui/material';

export const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
  })
);

export const ListItemIconStyle = styled((props) => <ListItemIcon {...props} />)(({ theme }) => ({
  width: 50,
  height: 50,
  border: `1px solid ${theme.palette.secondary.light}`,
  minWidth: 'auto',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.darker,
  fontSize: theme.typography.h1.fontSize,
}));
