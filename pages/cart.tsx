import CartList from '@/components/cart/cart-list';
import { MainLayout } from '@/components/layouts';
import { BottomNavigation, Box, Button, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface CartPageProps {}

export default function CartPage(props: CartPageProps) {
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
          <CartList />
          <Box sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation
              showLabels
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
                  $123.00
                </Typography>
              </Stack>
              <Stack>
                <Button variant="contained" size="large">
                  Buy
                </Button>
              </Stack>
            </BottomNavigation>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

CartPage.Layout = MainLayout;
