import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Stack, IconButton, InputAdornment, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ReactIcon, TextField } from 'components/molecules';
import AuthService from 'features/auth/Api/authService';
import { login } from 'features/auth/slice/AuthSlice';
import { setToken } from 'utils/token';
import config from 'config';
import routes from 'config/routes';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const LoginForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(LoginSchema),
  });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const onSubmit = (input) => {
    setIsSubmitting(true);
    const inputData = {
      email: input.email,
      password: input.password,
    };
    AuthService.login(inputData)
      .then((response) => {
        toast.success('Logged in successfully!');

        if (response) {
          setToken({ name: config.tokenName, value: response.accessToken });
          setToken({ name: config.refreshTokenName, value: response.refreshToken });
          setToken({ name: config.currentUser, value: response.user });
          dispatch(login(response?.user));
          navigate(routes.home.path);
        }
      })
      .catch((err) => {
        toast.error('Email and password do not match.');
      });

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <TextField
                autoComplete="username"
                type="email"
                label="Email address"
                placeholder="Enter your email"
                onChange={onChange}
                startAdornment={<ReactIcon width={20} icon="ic:outline-email" />}
                value={value}
                error={Boolean(error?.message)}
                helperText={error?.message}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="current-password"
              onChange={onChange}
              value={value}
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              startAdornment={<ReactIcon width={20} icon="eva:lock-outline" />}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <ReactIcon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              }
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
        />
        <Button
          size="large"
          fullWidth
          type="submit"
          variant="contained"
          sx={{ marginTop: 5 }}
          loading={isSubmitting.toString()}
        >
          Log In
        </Button>
      </Stack>

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2, fontSize: theme.typography.subtitle1, fontWeight: 400 }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.darker,
          }}
        >
          Forgot password?
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          Contact your admin to get password
        </Typography>
      </Stack>
    </form>
  );
};
