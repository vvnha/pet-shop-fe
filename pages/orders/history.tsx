import { MainLayout } from '@/components/layouts';
import OrderList from '@/components/order/order-list';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface HistoryOrderPageProps {}

export default function HistoryOrderPage(props: HistoryOrderPageProps) {
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
            Your orders
          </Typography>
          <OrderList />
        </Stack>
      </Container>
    </Box>
  );
}

HistoryOrderPage.Layout = MainLayout;
