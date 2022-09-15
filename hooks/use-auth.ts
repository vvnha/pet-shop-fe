import { MS_PER_HOUR } from '@/constants';
import { authApi } from '@/services/auth';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import _get from 'lodash/get';
import { User } from '@/models/user';
import { toast } from 'react-toastify';
import { LoginPayload } from '@/models';

export function useAuth(options?: Partial<PublicConfiguration>) {
  // manage profile
  const { data, error, mutate, isValidating } = useSWR('users/profile', {
    dedupingInterval: MS_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
  });

  const profile = _get(data, 'value', undefined);
  const isLoggedIn = !!profile && profile?.email !== '';

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);

    toast.success('Login successfully!');
    await mutate(); // empty input mean it will trigger the profile in API to update automatically
  }

  async function register(payload: Partial<User>) {
    const formData = new FormData();

    formData.append('data', JSON.stringify(payload));

    await authApi.register(formData);
    toast.success('Register successfully!');
  }

  async function logout() {
    await authApi.logOut();
    mutate({}, false); // false mean shouldReavalidate : false
  }

  async function updateUser(payload: any) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));

    await authApi.addToCart(profile._id, formData);
    await mutate();
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
    isLoggedIn,
    register,
    updateUser,
  };
}
