import * as React from 'react';
import { useAuth } from '@/hooks';
import { authApi } from '@/services/auth';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';

// export interface LoginProps {}

export default function Login() {
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
          <Stack direction="column" width="350px" spacing={1} mt={1} p={2}>
            <TextField id="outlined-name" label="Email" />
            <TextField id="outlined-name" label="Password" type="password" />
            <Button variant="contained" size="large" onClick={handleLoginClick}>
              Log in
            </Button>
          </Stack>
        </Stack>
        <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

        <button onClick={handleGetProfileClick}>Get Profile</button>
        <button onClick={handleLogoutClick}>Logout</button>
      </Container>
    </Box>
  );
}
