import { CartItemType } from '@/models';
import { Box, Stack, Checkbox, Typography, IconButton, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/food1.png';
import { Add, Remove, DeleteOutlineOutlined } from '@mui/icons-material';

export interface CartItemProps {
  cartItem: CartItemType;
  onClickItem?: Function;
}

export default function CartItem({ cartItem, onClickItem }: CartItemProps) {
  const onClickCartItem = () => {
    onClickItem?.(cartItem);
  };

  return (
    <Stack direction="column" p={1}>
      <Stack direction="row">
        <Stack direction="row" alignItems="center">
          <Stack>
            <Checkbox onChange={onClickCartItem} />
          </Stack>
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
            md: 'row',
            lg: 'row',
          }}
          flex="1 1 auto"
        >
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '20px',
              flex: '1 1 auto',
              px: 1,
            }}
          >
            {cartItem.product?.name || '--'}
          </Typography>
          <Stack direction="row" alignItems="center" py={1.5} px={1}>
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
              {`$${Number(cartItem.product?.price).toFixed(2)}`}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="center" p={1}>
              <Stack direction="row" spacing={0.5} maxWidth="120px">
                <IconButton size="small">
                  <Add />
                </IconButton>
                <TextField
                  id="outlined-size-small"
                  defaultValue={cartItem.quantity}
                  size="small"
                  InputProps={{
                    inputProps: {
                      style: {
                        maxHeight: '16px',
                      },
                    },
                  }}
                  type="text"
                  sx={{
                    width: '70px',
                    height: '16px',
                  }}
                />
                <IconButton size="small">
                  <Remove />
                </IconButton>
              </Stack>
            </Stack>
            <Stack direction="column" justifyContent="center" p={0}>
              <Divider
                orientation="vertical"
                sx={{
                  height: '50%',
                  px: 0,
                }}
              />
            </Stack>
            <Stack direction="column" justifyContent="center">
              <IconButton size="small">
                <DeleteOutlineOutlined />
              </IconButton>
            </Stack>
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
