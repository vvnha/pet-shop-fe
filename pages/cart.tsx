import CartList from '@/components/cart/cart-list';
import { Auth } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import { useAuth } from '@/hooks';
import { CartItemInputType, CartItemType, OrderInputType } from '@/models';
import { User } from '@/models/user';
import { orderApi } from '@/services/order';
import { BottomNavigation, Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export interface CartPageProps {}

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
    quantity: 1,
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
export default function CartPage(props: CartPageProps) {
  const { profile, updateUser } = useAuth();

  const [cartList, setCartList] = useState([]);
  const [remainingCartList, setRemainingCartList] = useState<CartItemInputType[]>([]);
  const scrollRef = useRef();

  const handleSelectedChange = async (remainingCart: CartItemInputType[]) => {
    setRemainingCartList(remainingCart);
  };

  const handleCartChange = async (cartInputList: CartItemInputType[]) => {
    const newCart = {
      cart: cartInputList,
    };

    try {
      await updateUser(newCart);

      toast.success('Update cart successfully!');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleOrderChange = async (order: OrderInputType) => {
    if (order.product_list.length <= 0) {
      toast.error('Please choose item to buy!');
      return;
    }

    const newCart = {
      cart: remainingCartList,
    };

    try {
      await orderApi.createOrder(order);
      await updateUser(newCart);
      toast.success('Update order successfully!');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  useEffect(() => {
    if (profile) {
      const currentProfile = { ...profile };

      setCartList(currentProfile.cart);
    }
  }, [profile]);

  return (
    <Auth>
      <Box py={2}>
        <Container>
          <Stack
            direction="column"
            sx={{
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Pangolin',
                fontWeight: '500',
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '35px',
              }}
            >
              Your cart
            </Typography>
            <CartList
              scrollRef={scrollRef}
              cartList={cartList}
              onSelectedChange={handleSelectedChange}
              onOrderChange={handleOrderChange}
              onCartChange={handleCartChange}
            />
          </Stack>
        </Container>
      </Box>
    </Auth>
  );
}

CartPage.Layout = MainLayout;
