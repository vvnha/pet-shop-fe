import { LoginPayload } from '@/models';
import axiosClient from '@/helpers/api';

export const productApi = {
  getProductList(payload?: any) {
    return axiosClient.get('/products', {
      params: payload,
    });
  },
};
