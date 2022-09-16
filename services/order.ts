import axiosClient from '@/helpers/api';

export const orderApi = {
  createOrder(payload: any) {
    return axiosClient.post(`/orders`, payload);
  },

  getHistoryOrder(params: any) {
    return axiosClient.get('/orders/my-orders/history', {
      params,
    });
  },
};
