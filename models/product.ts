import { Pet } from './pet';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  pet_list:
    | [
        {
          pet: Pet | null;
        }
      ]
    | [];
  promotion_list?:
    | [
        {
          promotion: string;
        }
      ]
    | [];
  image_list: string[];
}
