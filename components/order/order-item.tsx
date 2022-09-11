import * as React from 'react';
import { Stack, Checkbox, Typography, IconButton, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import heroImg from '@/public/food1.png';
import { Add, Remove, DeleteOutlineOutlined } from '@mui/icons-material';

export interface OrderItemProps {}

export default function OrderItem(props: OrderItemProps) {
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
              Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food
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
              Quantity: 1 item
            </Typography>
          </Stack>
          {/* <Typography
            sx={{
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '20px',
              flex: '1 1 auto',
              px: 1,
            }}
          >
            Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food
          </Typography>
          <Stack direction="column" justifyContent="center" p={1}>
            <Typography>1 item</Typography>
          </Stack> */}

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
              $123.00
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
              Total: $123.00
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
