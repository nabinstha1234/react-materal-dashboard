import { alpha, styled } from '@mui/material/styles';
import { InputBase, InputLabel, InputAdornment } from '@mui/material';

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  '&.MuiInputLabel-root': {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '19.5px',
    color: theme.palette.primary.dark,
  },
}));

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '19.5px',
    color: theme.palette.primary.dark,
  },
  '& .MuiInputBase-input': {
    width: '100%',
    borderRadius: theme.spacing(2),
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    fontSize: 14,
    padding: '8px 16px 8px 35px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '::placeholder': {
      color: theme.palette.secondary.darker,
    },
  },
}));

export const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  marginLeft: '5px',
  height: '2rem',
  width: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.secondary.darker,
}));
