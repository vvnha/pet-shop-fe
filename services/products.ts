import { FilterType, LoginPayload } from '@/models';
import axiosClient from '@/helpers/api';

export const productApi = {
  getProductList(payload?: any) {
    return axiosClient.get('/products', {
      params: payload,
    });
  },

  searchProduct(params: any) {
    return axiosClient.get('/products/filter/search', {
      params,
    });
  },
};
