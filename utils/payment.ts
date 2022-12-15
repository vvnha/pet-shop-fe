import axiosClient from '@/helpers/api';

export const paymentApi = {
  payOrder(payload: any) {
    return axiosClient.post('orders/secret', payload);
  },
};
