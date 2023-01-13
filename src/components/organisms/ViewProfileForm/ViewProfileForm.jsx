import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

import { TextField } from 'components/molecules';
import { BadgeAvatar } from 'components/molecules';
import userProfileDemo from 'assets/images/svg/user-profile-demo.svg';

import { Item } from './styles';

const UserProfileSchema = Yup.object().shape({
  empId: Yup.string().required('Employee Id is required'),
  joiningDate: Yup.string(),
  officialEmailAddress: Yup.string().email('Email must be a valid email address'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  designation: Yup.string().required('Designation is required'),
  dateOfBirth: Yup.string(),
  personalEmailAddress: Yup.string().email('Email must be a valid email address'),
  reportingPersonName: Yup.string(),
});

const ViewProfileForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      empId: '',
      joiningDate: '',
      officialEmailAddress: '',
      phoneNumber: '',
      designation: '',
      dateOfBirth: '',
      personalEmailAddress: '',
      reportingPersonName: '',
    },
    mode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(UserProfileSchema),
  });

  const onSubmit = (input) => {
    setIsSubmitting(true);
    setIsSubmitting(false);
    console.log(isSubmitting);
  };

  const handleEditProfilePicClick = () => {
    console.log('i am icon click');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          paddingBottom: '1rem',
        }}
      >
        <Divider></Divider>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <Item
            sx={{
              flex: '1 0 30%',
              marginTop: '1rem',
              textAlign: 'center',
            }}
          >
            <BadgeAvatar
              src={userProfileDemo}
              onIconClick={handleEditProfilePicClick}
              height={160}
              width={160}
            />
            <Typography
              sx={{
                marginTop: '1rem',
                color: theme.palette.primary.dark,
                ...theme.typography.subtitle1,
                fontSize: '24px',
              }}
            >
              Abhisekh Sahoo
            </Typography>
            <Typography variant="subtitle1">HR</Typography>
          </Item>

          <Item
            sx={{
              flex: '1 1 70%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                flexWrap: 'wrap',
                flex: '1',
              }}
            >
              <Controller
                control={control}
                name="empId"
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                  return (
                    <TextField
                      type="text"
                      label="Employee ID"
                      lock
                      readOnly
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
                      label="Date of Joining"
                      lock
                      readOnly
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
                      label="Official Email Address"
                      onChange={onChange}
                      lock
                      readOnly
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
                      label="Phone Number"
                      onChange={onChange}
                      lock
                      readOnly
                      value={value}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Item>
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                flexWrap: 'wrap',
                flex: '1',
              }}
            >
              <Controller
                control={control}
                name="empId"
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                  return (
                    <TextField
                      type="text"
                      label="Designation"
                      onChange={onChange}
                      lock
                      readOnly
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
                      label="Date of Birth"
                      onChange={onChange}
                      lock
                      readOnly
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
                      label="Personal Email Address"
                      onChange={onChange}
                      lock
                      readOnly
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
                      label="Reporting Person Name"
                      onChange={onChange}
                      lock
                      readOnly
                      value={value}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Item>
          </Item>
        </Stack>
      </Box>
    </form>
  );
};

export default ViewProfileForm;
