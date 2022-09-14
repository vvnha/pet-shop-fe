import { Pet } from './pet';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  pet_list: Pet[];
  promotion_list?: string[];
  image_list: string[];
}
