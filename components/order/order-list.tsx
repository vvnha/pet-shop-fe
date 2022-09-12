import { OrderItemType } from '@/models';
import { Box } from '@mui/material';
import * as React from 'react';
import OrderItem from './order-item';

export interface OrderListProps {
  orderList?: OrderItemType[];
}

const tempOrder: OrderItemType[] = [
  {
    product: {
      _id: '1',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
  {
    product: {
      _id: '2',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 2,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
  {
    product: {
      _id: '3',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
  {
    product: {
      _id: '4',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 3,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
];

export default function OrderList({ orderList = tempOrder }: OrderListProps) {
  return (
    <Box py={2}>
      {orderList.map((orderItem) => (
        <OrderItem key={orderItem.product?._id || ''} orderItem={orderItem} />
      ))}
    </Box>
  );
}
