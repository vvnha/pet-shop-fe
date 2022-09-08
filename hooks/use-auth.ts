import { MS_PER_HOUR } from '@/constants';
import { authApi } from '@/services/auth';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import _get from 'lodash/get';

export function useAuth(options?: Partial<PublicConfiguration>) {
  // manage profile
  const { data, error, mutate, isValidating } = useSWR('users/profile', {
    dedupingInterval: MS_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
  });

  const profile = _get(data, 'value', undefined);

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      email: 'abcdef@gmail.com',
      password: '123456',
    });

    await mutate(); // empty input mean it will trigger the profile in API to update automatically
  }

  async function logout() {
    await authApi.logOut();
    mutate({}, false); // false mean shouldReavalidate : false
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
