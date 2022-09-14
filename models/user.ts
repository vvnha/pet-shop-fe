import { Product } from './product';

export interface User {
  _id?: string;
  name?: string;
  username?: string;
  email: string;
  password: string;
  confirm_password?: string;
  role?: string;
  avatar_image?: string;
  cart?: {
    product: Product | null;
    quantity: number;
  }[];
}
