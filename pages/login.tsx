import * as React from 'react';
import { useAuth, useTrans } from '@/hooks';
import { authApi } from '@/services/auth';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginPayload } from '@/models';
import { useRouter } from 'next/router';

// export interface LoginProps {}

export default function Login() {
  const router = useRouter();
  const { profile, login, logout, signInGoogleWithFirebase, signInWithFirebase } = useAuth({
    revalidateOnMount: false,
  });
  const trans = useTrans();

  async function handleLoginClick(values: LoginPayload) {
    try {
      await signInWithFirebase(values);
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

  const handleSignupWithFirebase = async (params: {}) => {
    await signInGoogleWithFirebase();
    router.back();
  };

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
            {trans.login}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" width="350px" spacing={1} mt={1} p={2}>
              <TextField
                id="outlined-name"
                label={trans.signForm.email}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
              <TextField
                id="outlined-name"
                label={trans.signForm.password}
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
              />
              <Button variant="contained" type="submit" size="large">
                {trans.login}
              </Button>
            </Stack>
          </form>
          <Stack direction="column" width="350px" spacing={1} mt={1} p={2}>
            <Button
              onClick={handleSignupWithFirebase}
              fullWidth
              variant="contained"
              type="button"
              size="large"
            >
              GOOGLE
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
