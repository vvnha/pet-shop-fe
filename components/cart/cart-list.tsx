import { CartItemType, OrderInputType } from '@/models';
import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CartItem from './cart-item';

export interface CartListProps {
  cartList?: CartItemType[];
  onOrderChange?: Function;
}

const tempCart: CartItemType[] = [
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
  },
  {
    product: {
      _id: '5',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 3,
  },
  {
    product: {
      _id: '6',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 3,
  },
  {
    product: {
      _id: '7',
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

export default function CartList({ cartList = tempCart, onOrderChange }: CartListProps) {
  const [order, setOrder] = useState<OrderInputType>({
    product_list: [],
    promotion_list: [],
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItemList, setSelectedItemList] = useState<CartItemType[]>([]);

  const handleClickItem = (cartItem: CartItemType) => {
    const orderItemIndex = order.product_list.findIndex(
      (orderItem) => orderItem.product === cartItem.product?._id
    );

    const selectedItemIndex = selectedItemList.findIndex(
      (selectedItem: CartItemType) => cartItem.product?._id === selectedItem.product?._id
    );

    let newOrder = { ...order };
    let newSelectedItemList = [...selectedItemList];

    if (!cartItem.product?._id) return;

    let inititalValue = 0;

    if (orderItemIndex > -1) {
      newOrder.product_list.splice(orderItemIndex, 1);
    } else {
      newOrder.product_list.push({ product: cartItem.product._id, quantity: cartItem.quantity });
    }

    if (selectedItemIndex > -1) {
      newSelectedItemList.splice(selectedItemIndex, 1);
    } else {
      newSelectedItemList.push(cartItem);
    }

    const totalPrice = newSelectedItemList.reduce((prevValue, selectedItem) => {
      if (!selectedItem.product) return prevValue;
      return prevValue + selectedItem.product.price * selectedItem.quantity;
    }, inititalValue);

    setTotalPrice(totalPrice);

    setOrder(newOrder);
    setSelectedItemList(newSelectedItemList);
    onOrderChange?.(order);
  };

  return (
    <Box py={2}>
      {cartList.map((cartItem) => (
        <CartItem
          key={cartItem.product?._id || ''}
          onClickItem={handleClickItem}
          cartItem={cartItem}
        />
      ))}
      <Box sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="column">
            <Typography>Total:</Typography>
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '18px',
                color: 'primary.main',
                display: 'inline',
              }}
            >
              {`$${totalPrice.toFixed(2)}`}
            </Typography>
          </Stack>
          <Stack>
            <Button variant="contained" size="large">
              Buy
            </Button>
          </Stack>
        </BottomNavigation>
      </Box>
    </Box>
  );
}
