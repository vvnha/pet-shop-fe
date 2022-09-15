import { FilterType, LoginPayload } from '@/models';
import axiosClient from '@/helpers/api';

export const productApi = {
  getProductList(payload?: any) {
    return axiosClient.get('/products', {
      params: payload,
    });
  },

  getProductDetail(productId: string) {
    return axiosClient.get(`/products/${productId}`);
  },

  searchProduct(params: any) {
    return axiosClient.get('/products/filter/search', {
      params,
    });
  },
};
