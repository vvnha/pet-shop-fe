import { Product } from './product';
import { User } from './user';

export interface Order {
  product_list: {
    product: Product;
    priceAtBuyTime: number;
    promotion: string[];
    quantity: number;
  }[];
  user: User;
  total_price: number;
  status: {
    type: string;
  };
  promotion_list?: string[];
}
