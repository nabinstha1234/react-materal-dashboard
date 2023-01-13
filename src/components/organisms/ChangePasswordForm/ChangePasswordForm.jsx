import React, { useState } from 'react';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Divider, Stack, Button } from '@mui/material';

import { TextField } from 'components/molecules';

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old Password is required'),
  newPassword: Yup.string().required('New Password is required'),
  confirmPassword: Yup.string().required('Confirm Password is required'),
});

const ChangePasswordForm = ({ handleCloseModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(ChangePasswordSchema),
  });

  const onSubmit = (input) => {
    setIsSubmitting(true);
    setIsSubmitting(false);
    console.log(isSubmitting);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Divider></Divider>
        <Stack
          sx={{
            marginTop: '1rem',
            width: theme.spacing(40),
          }}
          spacing={4}
        >
          <Controller
            control={control}
            name="empId"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <TextField
                  type="text"
                  label="Enter old password"
                  placeholder="Enter old password"
                  onChange={onChange}
                  value={value}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="empId"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <TextField
                  type="text"
                  label="Enter a new password"
                  placeholder="Enter a new password"
                  onChange={onChange}
                  value={value}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="empId"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <TextField
                  type="text"
                  label="Confirm a new password"
                  placeholder="Confirm a new password"
                  onChange={onChange}
                  value={value}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              );
            }}
          />
          <Stack display="flex" flexDirection="row" justifyContent="center" gap="1rem">
            <Button variant="contained">Save</Button>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
};

export default ChangePasswordForm;
