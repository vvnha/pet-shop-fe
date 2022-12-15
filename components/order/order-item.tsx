import React, { useEffect, useState } from 'react';
import { Stack, Checkbox, Typography, IconButton, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import heroImg from '@/public/food1.png';
import { Add, Remove, DeleteOutlineOutlined } from '@mui/icons-material';
import { Order, OrderItemType } from '@/models';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
export interface OrderItemProps {
  orderItem: Order['product_list'][number];
}

export default function OrderItem({ orderItem }: OrderItemProps) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (orderItem) {
      const currentTotalPrice = orderItem.priceAtBuyTime * orderItem.quantity;
      setTotalPrice(currentTotalPrice);
    }
  }, [orderItem]);

  return (
    <Stack direction="column" p={1}>
      <Stack direction="row">
        <Stack direction="row" alignItems="center">
          <Stack height="80px" width="80px">
            <Image
              src={heroImg}
              height="80px"
              width="80px"
              objectFit="contain"
              layout="responsive"
              alt="avatar"
            />
          </Stack>
        </Stack>
        <Stack
          direction={{
            xs: 'column',
            md: 'column',
            lg: 'row',
          }}
          flex="1 1 auto"
        >
          <Stack direction="column" flexGrow={1}>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '17px',
                lineHeight: '20px',
                flex: '1 1 auto',
                px: 1,
              }}
            >
              {orderItem.product?.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '17px',
                lineHeight: '20px',
                flex: '1 1 auto',
                color: 'rgb(120, 120, 120)',
                px: 1,
              }}
            >
              Quantity: {orderItem.quantity} item
            </Typography>
          </Stack>

          <Stack direction="column" alignItems="flex-end">
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '16px',
                color: 'rgb(120, 120, 120)',
                display: 'inline',
                flex: '1 1 auto',
              }}
            >
              {`$${orderItem.priceAtBuyTime.toFixed(2)}`}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '18px',
                color: 'primary.main',
                display: 'inline',
                flex: '1 1 auto',
                pt: 0.5,
              }}
            >
              Total: {`$${totalPrice.toFixed(2)}`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider
        sx={{
          my: 1,
        }}
      />
    </Stack>
  );
}
