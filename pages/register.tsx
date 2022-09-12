import * as React from 'react';
import { useAuth } from '@/hooks';
import { authApi } from '@/services/auth';
import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import { EmptyLayout } from '@/components/layouts';
import { PhotoCamera } from '@mui/icons-material';

// export interface LoginProps {}

export default function Register() {
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });
  async function handleLoginClick() {
    try {
      await login();
      console.log('redirect to dashboard');
    } catch (error) {
      console.log('fail login', error);
    }
  }

  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('fail get profile', error);
    }
  }

  async function handleLogoutClick() {
    try {
      await logout();
      console.log('redirect to login');
    } catch (error) {
      console.log('fail logout', error);
    }
  }

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
          <Stack direction="column" width="330px" spacing={1} mt={1} p={2}>
            <TextField id="outlined-name" label="Name" />
            <TextField id="outlined-name" label="Email" />
            <TextField id="outlined-name" label="Password" type="password" />
            <TextField id="outlined-name" label="Confirm Password" type="password" />
            <Button variant="contained" size="large" onClick={handleLoginClick}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

Register.Layout = EmptyLayout;
