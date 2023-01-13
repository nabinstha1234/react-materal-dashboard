import React, { useState } from 'react';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Divider, Stack, Button, IconButton, InputAdornment } from '@mui/material';

import { TextField, ReactIcon } from 'components/molecules';
import AuthService from 'features/auth/Api/authService';
import { toast } from 'react-hot-toast';

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string().required('Old Password is required'),
  newPassword: Yup.string().required('New Password is required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Password is Required'),
});

const ChangePasswordForm = ({ handleCloseModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    mode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(ChangePasswordSchema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data);
    AuthService.changePassword(data)
      .then((response) => {
        console.log(response, 'i am response');
        toast.success(response?.message);
        handleCloseModal();
      })
      .catch((error) => {
        error?.data?.message && toast.error(error?.data?.message);
        error?.data?.error && toast.error(error?.data?.error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  label="Enter old password"
                  placeholder="Enter old password"
                  onChange={onChange}
                  value={value}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                        <ReactIcon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              );
            }}
          />
          <Controller
            control={control}
            name="newPassword"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <TextField
                  type={showNewPassword ? 'text' : 'password'}
                  label="Enter a new password"
                  placeholder="Enter a new password"
                  onChange={onChange}
                  value={value}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewPassword((prev) => !prev)} edge="end">
                        <ReactIcon icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              );
            }}
          />
          <Controller
            control={control}
            name="confirmNewPassword"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <TextField
                  type={showConfirmPassword ? 'text' : 'password'}
                  label="Confirm a new password"
                  placeholder="Confirm a new password"
                  onChange={onChange}
                  value={value}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        edge="end"
                      >
                        <ReactIcon
                          icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              );
            }}
          />
          <Stack display="flex" flexDirection="row" justifyContent="center" gap="1rem">
            <Button type="submit" disabled={isSubmitting} variant="contained">
              Save
            </Button>
            <Button disabled={isSubmitting} variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
};

export default ChangePasswordForm;
