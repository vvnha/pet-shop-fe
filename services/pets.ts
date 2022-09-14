import axiosClient from '@/helpers/api';

export const petApi = {
  getAllPets() {
    return axiosClient.get('/pets');
  },
};
