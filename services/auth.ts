import { LoginPayload } from '@/models';
import axiosClient from '@/helpers/api';
import { User } from '@/models/user';

export const authApi = {
  login(firebaseToken: string) {
    return axiosClient.post(
      '/login',
      {},
      {
        headers: {
          Authorization: `Bearer ${firebaseToken}`,
        },
      }
    );
  },
  logOut() {
    return axiosClient.post('/logout');
  },
  getProfile() {
    return axiosClient.get('/users/profile');
  },
  register(payload: any) {
    return axiosClient.postForm('/users', payload);
  },
  addToCart(userId: string, payload: any) {
    return axiosClient.patchForm(`/users/${userId}`, payload);
  },
};
