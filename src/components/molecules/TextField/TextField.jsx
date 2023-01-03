import React from 'react';

import { FormControl } from '@mui/material';

import {
  BootstrapInput,
  StyledInputLabel,
  StyledInputAdornment,
  StyledEndAdornment,
} from './styles';

const TextField = (props) => {
  const { startAdornment, endAdornment, ...rest } = props;
  return (
    <FormControl variant="standard">
      {props.label ? (
        <StyledInputLabel shrink htmlFor="bootstrap-input">
          {props.label}
        </StyledInputLabel>
      ) : undefined}
      <BootstrapInput
        {...rest}
        startAdornment={
          startAdornment ? (
            <StyledInputAdornment position="start">{startAdornment}</StyledInputAdornment>
          ) : undefined
        }
        endAdornment={
          endAdornment ? (
            <StyledEndAdornment position="end">{endAdornment}</StyledEndAdornment>
          ) : undefined
        }
      />
    </FormControl>
  );
};

export default TextField;
