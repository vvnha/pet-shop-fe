import CartList from '@/components/cart/cart-list';
import { MainLayout } from '@/components/layouts';
import { OrderInputType } from '@/models';
import { BottomNavigation, Box, Button, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface CartPageProps {}

export default function CartPage(props: CartPageProps) {
  const handleOrderChange = (order: OrderInputType) => {
    console.log('new order', order);
  };
  return (
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
          <CartList onOrderChange={handleOrderChange} />
        </Stack>
      </Container>
    </Box>
  );
}

CartPage.Layout = MainLayout;
