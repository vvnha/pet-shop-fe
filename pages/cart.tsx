import CartList from '@/components/cart/cart-list';
import { MainLayout } from '@/components/layouts';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface CartPageProps {}

export default function CartPage(props: CartPageProps) {
  return (
    <Box py={2}>
      <Container>
        <Stack direction="column">
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
          <CartList />
        </Stack>
      </Container>
    </Box>
  );
}

CartPage.Layout = MainLayout;
