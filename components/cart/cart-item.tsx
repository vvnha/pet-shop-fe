import { CartItemType } from '@/models';
import { Box, Stack, Checkbox, Typography, IconButton, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/food1.png';
import { Add, Remove, DeleteOutlineOutlined } from '@mui/icons-material';

export interface CartItemProps {}

export default function CartItem(props: CartItemProps) {
  return (
    <Stack direction="column" p={1}>
      <Stack direction="row">
        <Stack direction="row" alignItems="center">
          <Stack>
            <Checkbox onChange={() => {}} />
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
            md: 'column',
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
            Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food
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
              $123.00
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column" justifyContent="center" p={1}>
              <Stack direction="row" spacing={0.5}>
                <IconButton size="small">
                  <Add />
                </IconButton>
                <TextField
                  id="outlined-size-small"
                  defaultValue={1}
                  size="small"
                  InputProps={{
                    inputProps: {
                      min: 1,
                      style: {
                        maxHeight: '16px',
                      },
                    },
                  }}
                  type="number"
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
            <Stack direction="column" justifyContent="center" p={1}>
              <Divider
                orientation="vertical"
                sx={{
                  height: '50%',
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
