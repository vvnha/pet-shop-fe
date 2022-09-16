import { Order, OrderItemType } from '@/models';
import { Box } from '@mui/material';
import * as React from 'react';
import OrderItem from './order-item';
import { v4 as uuidv4 } from 'uuid';

export interface OrderListProps {
  orderList?: Order['product_list'];
  scrollRef?: any;
}

const tempOrder: Order['product_list'] = [
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
];

export default function OrderList({ orderList = tempOrder, scrollRef }: OrderListProps) {
  return (
    <Box py={2} ref={scrollRef}>
      {orderList.map((orderItem) => (
        <OrderItem key={uuidv4()} orderItem={orderItem} />
      ))}
    </Box>
  );
}
