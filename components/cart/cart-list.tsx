import { CartItemType } from '@/models';
import { Box, Stack, Checkbox, Typography, IconButton, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/food1.png';
import { Add, Remove, DeleteOutlineOutlined } from '@mui/icons-material';
import CartItem from './cart-item';

export interface CartListProps {
  cartList?: CartItemType[];
}

const tempCart: CartItemType[] = [
  {
    product: {
      id: '1',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
  },
  {
    product: {
      id: '2',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 2,
  },
  {
    product: {
      id: '3',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
  },
  {
    product: {
      id: '4',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 3,
  },
];

export default function CartList({ cartList = tempCart }: CartListProps) {
  return (
    <Box py={2}>
      {cartList.map((cartItem) => (
        <CartItem key={cartItem.product?.id || ''} />
      ))}
    </Box>
  );
}
