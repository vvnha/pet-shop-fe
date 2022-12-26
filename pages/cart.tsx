import CartList from '@/components/cart/cart-list';
import { Auth } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import { useAuth, useTrans } from '@/hooks';
import { CartItemInputType, CartItemType, OrderInputType } from '@/models';
import { User } from '@/models/user';
import { orderApi } from '@/services/order';
import { paymentApi } from '@/utils/payment';
import PaymentForm from '@/components/cart/payment-form';
import {
  BottomNavigation,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

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

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CartPage(props: CartPageProps) {
  const { profile, updateUser } = useAuth();
  const trans = useTrans();

  const [cartList, setCartList] = useState([]);
  const [order, setOrder] = useState<OrderInputType>({ product_list: [], promotion_list: [] });
  const [totalAmount, setTotalAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [remainingCartList, setRemainingCartList] = useState<CartItemInputType[]>([]);
  const [paymentOption, setPaymentOption] = useState<Object | null>(null);
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

  const handleOrderChange = async (order: OrderInputType, totalPrice: number) => {
    if (order.product_list.length <= 0) {
      toast.error('Please choose item to buy!');
      return;
    }

    const newCart = {
      cart: remainingCartList,
    };

    try {
      const response: any = await paymentApi.payOrder({ totalPrice });
      setPaymentOption({ clientSecret: response.value.client_secret });
      setIsOpen(true);
      setOrder(order);
      setTotalAmount(totalPrice);

      //   await orderApi.createOrder(order);
      //   await updateUser(newCart);
      //   toast.success('Update order successfully!');
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

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePay = async () => {
    console.log('run');

    const newCart = {
      cart: remainingCartList,
    };

    try {
      await orderApi.createOrder({
        ...order,
        total_price: totalAmount,
      });
      await updateUser(newCart);
      toast.success('Update order successfully!');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

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
              {trans.cart}
            </Typography>
            <CartList
              scrollRef={scrollRef}
              cartList={cartList}
              onSelectedChange={handleSelectedChange}
              onOrderChange={handleOrderChange}
              onCartChange={handleCartChange}
            />
          </Stack>
          {paymentOption && (
            <Elements stripe={stripePromise} options={paymentOption}>
              <PaymentForm open={isOpen} onClose={handleClose} onPay={handlePay} />
            </Elements>
          )}
        </Container>
      </Box>
    </Auth>
  );
}

CartPage.Layout = MainLayout;
