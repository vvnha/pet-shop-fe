import { Box, Button, Chip, IconButton, Input, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import heroImg from '@/public/food1.png';
import { Add, Remove } from '@mui/icons-material';
import { Product } from '@/models';
import QuantityComponent from '../cart/quantity';
import { useTrans } from '@/hooks';

export interface ProductDetailProps {
  product: Product;
  onAddToCart?: Function;
}

export function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const [qty, setQty] = useState(1);
  const trans = useTrans();

  const handleChangeQty = (qtyValue: number) => {
    setQty(qtyValue);
  };

  const onBuyClick = () => {
    const cartItem = {
      product: product._id,
      quantity: qty,
    };

    onAddToCart?.(cartItem);
  };

  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
        lg: 'row',
      }}
    >
      <Stack direction="column">
        <Box mt={2}>
          <Image
            objectFit="contain"
            width="444px"
            height="444px"
            src={heroImg}
            layout="responsive"
            alt="product-image"
          />
        </Box>
        <Stack direction="row" justifyContent="space-between" spacing={0.5} mt={2}>
          <Box
            width="62px"
            maxHeight="62px"
            p={1}
            border="1px solid"
            borderColor="primary.main"
            borderRadius="5px"
          >
            <Image
              width="62px"
              height="62px"
              objectFit="contain"
              src={heroImg}
              layout="responsive"
              alt="product-image"
            />
          </Box>
          <Box
            width="62px"
            maxHeight="62px"
            p={1}
            border="1px solid"
            borderColor="primary.main"
            borderRadius="5px"
          >
            <Image
              width="62px"
              height="62px"
              objectFit="contain"
              src={heroImg}
              layout="responsive"
              alt="product-image"
            />
          </Box>
          <Box
            width="62px"
            maxHeight="62px"
            p={1}
            border="1px solid"
            borderColor="primary.main"
            borderRadius="5px"
          >
            <Image
              width="62px"
              height="62px"
              objectFit="contain"
              src={heroImg}
              layout="responsive"
              alt="product-image"
            />
          </Box>
          <Box
            width="62px"
            maxHeight="62px"
            p={1}
            border="1px solid"
            borderColor="primary.main"
            borderRadius="5px"
          >
            <Image
              width="62px"
              height="62px"
              objectFit="contain"
              src={heroImg}
              layout="responsive"
              alt="product-image"
            />
          </Box>
          <Box
            width="62px"
            maxHeight="62px"
            p={1}
            border="1px solid"
            borderColor="primary.main"
            borderRadius="5px"
          >
            <Image
              width="62px"
              height="62px"
              objectFit="contain"
              src={heroImg}
              layout="responsive"
              alt="product-image"
            />
          </Box>
          <Box
            width="62px"
            maxHeight="62px"
            p={1}
            border="1px solid"
            borderColor="primary.main"
            borderRadius="5px"
          >
            <Image
              width="62px"
              height="62px"
              objectFit="contain"
              src={heroImg}
              layout="responsive"
              alt="product-image"
            />
          </Box>
        </Stack>
      </Stack>

      <Stack p={2.5} direction="column">
        <Stack direction="row">
          <Typography
            sx={{
              mt: 2,
              fontFamily: 'Rubik',
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: '28px',
              lineHeight: '33px',
            }}
          >
            {product.name}
          </Typography>
        </Stack>

        <Stack flexGrow={0.5}>
          <Stack direction="row" alignItems="center" mt={1.5}>
            <Typography color="#979697">{trans.product.petType}:</Typography>
            {product.pet_list.map((item) => (
              <Chip key={item._id} label={item.name} color="primary" size="small" sx={{ ml: 1 }} />
            ))}
          </Stack>

          <Stack direction="row" mt={1.5}>
            <Typography pr={2} color="#979697">
              {trans.product.desc}:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '20px',
              }}
            >
              {product.description}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" mt={1.5}>
            <Typography pr={2} color="#979697">
              {trans.product.price}:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '26px',
                color: '#FFFFFF',
                bgcolor: 'success.main',
                clipPath: 'polygon(100% 0, 80% 50%, 100% 100%, 0% 100%, 0 50%, 0 0);',
                display: 'inline',
                pr: 3,
              }}
            >
              {`$${product.price}`}
            </Typography>
          </Stack>
          <Stack direction="column" mt={2}>
            <Typography pr={2} color="#979697">
              {trans.product.qty}:
            </Typography>
            <QuantityComponent onChangeQty={handleChangeQty} />
          </Stack>
        </Stack>

        <Stack direction="row" mt={1.5} alignItems="center">
          <Button variant="outlined" size="medium" onClick={onBuyClick}>
            {trans.product.buyNow}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
