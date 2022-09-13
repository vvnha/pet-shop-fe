import { LoginPayload } from '@/models';
import axiosClient from '@/helpers/api';
import { User } from '@/models/user';

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post('/login', payload);
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
};
