import * as React from 'react';
import { useAuth } from '@/hooks';
import { authApi } from '@/services/auth';
import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import { EmptyLayout } from '@/components/layouts';
import { PhotoCamera } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import _get from 'lodash/get';
import { User } from '@/models/user';

// export interface LoginProps {}

export default function Register() {
  const { profile, login, register, signUpWithFirebase } = useAuth({ revalidateOnMount: false });

  async function handleSaveUser(values: any) {
    const newValues = { ...values };
    delete newValues.retypePassword;

    signUpWithFirebase(newValues);
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please fill your name!'),
      email: Yup.string().email().required('Please fill your email!'),
      password: Yup.string().required('Please fill your password!'),
      retypePassword: Yup.string()
        .required('Please fill your password!')
        .oneOf([Yup.ref('password')]),
    }),
    onSubmit: (values) => {
      handleSaveUser(values);
    },
  });

  return (
    <Box>
      <Container>
        <Stack direction="column" alignItems="center" p={2} justifyContent="center">
          <Typography
            sx={{
              fontFamily: 'Pangolin',
              fontWeight: '500',
              fontStyle: 'normal',
              fontSize: '28px',
              lineHeight: '35px',
              textAlign: 'center',
            }}
          >
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" width="330px" spacing={1} mt={1} p={2}>
              <TextField
                id="outlined-name"
                label="Name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
              />
              <TextField
                id="outlined-name"
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
              <TextField
                id="outlined-name"
                label="Password"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
              />
              <TextField
                id="outlined-name"
                label="Confirm Password"
                type="password"
                name="retypePassword"
                onChange={formik.handleChange}
                value={formik.values.retypePassword}
                error={Boolean(formik.errors.retypePassword)}
                helperText={formik.errors.retypePassword}
              />

              <Button variant="contained" type="submit" size="large">
                Sign up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Box>
  );
}

Register.Layout = EmptyLayout;
