import React from 'react';

import { FormControl, FormHelperText } from '@mui/material';
import { ReactIcon } from 'components/molecules';

import {
  BootstrapInput,
  StyledInputLabel,
  StyledInputAdornment,
  StyledEndAdornment,
} from './styles';

const TextField = (props) => {
  const { startAdornment, lock, endAdornment, error, helperText, ...rest } = props;
  return (
    <FormControl error variant="standard">
      {props.label ? (
        <StyledInputLabel shrink htmlFor="bootstrap-input">
          {props.label}{' '}
          {lock ? (
            <ReactIcon
              sx={{
                color: 'secondary.lighter',
              }}
              icon="material-symbols:lock-outline"
              width={20}
              height={18}
            />
          ) : null}
        </StyledInputLabel>
      ) : undefined}
      <BootstrapInput
        {...rest}
        error={error}
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
      {error && helperText ? <FormHelperText>{helperText}</FormHelperText> : undefined}
    </FormControl>
  );
};

export default TextField;
