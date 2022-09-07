import { LoginPayload } from '@/models/index';
import axiosClient from '@/helpers/api';

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
};
