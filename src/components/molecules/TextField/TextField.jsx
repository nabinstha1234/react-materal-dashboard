import React from 'react';

import { FormControl } from '@mui/material';

import { BootstrapInput, StyledInputLabel, StyledInputAdornment } from './styles';

const TextField = (props) => {
  const { startAdornment, ...rest } = props;
  return (
    <FormControl variant="standard">
      <StyledInputLabel shrink htmlFor="bootstrap-input">
        {props.label}
      </StyledInputLabel>
      <BootstrapInput
        {...rest}
        startAdornment={
          <StyledInputAdornment position="start">{startAdornment}</StyledInputAdornment>
        }
      />
    </FormControl>
  );
};

export default TextField;
