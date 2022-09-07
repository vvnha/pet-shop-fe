import * as React from 'react';
import { useAuth } from '@/hooks';
import { authApi } from '@/services/auth';

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
    <div>
      <h1>Login</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
