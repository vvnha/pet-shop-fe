import { CartItemType } from '@/models';
import { Box, Stack, Checkbox, Typography, IconButton, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import heroImg from '@/public/food1.png';
import { Add, Remove, DeleteOutlineOutlined } from '@mui/icons-material';
import QuantityComponent from './quantity';

export interface CartItemProps {
  cartItem: CartItemType;
  onClickItem?: Function;
  onChangeQty?: Function;
  onDeleteItem?: Function;
}

export default function CartItem({
  cartItem,
  onClickItem,
  onChangeQty,
  onDeleteItem,
}: CartItemProps) {
  const [cartItemState, setCartItemState] = useState(cartItem);
  const [qty, setQty] = useState(cartItem.quantity);

  const onClickCartItem = () => {
    onClickItem?.(cartItem);
  };

  const handleChangeQty = (qtyvalue: number) => {
    setQty(qtyvalue);
    const newCartItemState: CartItemType = { ...cartItemState, quantity: qtyvalue };

    setCartItemState(newCartItemState);
    onChangeQty?.(newCartItemState);
  };

  const onDeleteClick = () => {
    onDeleteItem?.(cartItem);
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
            {cartItemState.product?.name || '--'}
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
              {`$${Number(cartItemState.product?.price).toFixed(2)}`}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="center" p={1}>
              <QuantityComponent initialQty={qty} onChangeQty={handleChangeQty} />
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
              <IconButton size="small" onClick={onDeleteClick}>
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
