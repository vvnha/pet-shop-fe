import * as React from 'react';
import { useAuth } from '@/hooks';
import { authApi } from '@/services/auth';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginPayload } from '@/models';
import { useRouter } from 'next/router';

// export interface LoginProps {}

export default function Login() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });
  async function handleLoginClick(values: LoginPayload) {
    try {
      await login(values);
      router.back();
    } catch (error) {
      console.log('fail login', error);
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Please fill your email!'),
      password: Yup.string().required('Please fill your password!'),
    }),
    onSubmit: (values) => {
      handleLoginClick(values);
    },
  });

  return (
    <Box>
      <Container>
        <Stack direction="column" alignItems="center" justifyContent="center">
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
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" width="350px" spacing={1} mt={1} p={2}>
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
              <Button variant="contained" type="submit" size="large">
                Log in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Box>
  );
}
