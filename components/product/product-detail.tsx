import { Box, Button, Chip, IconButton, Input, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/food1.png';
import { Add, Remove } from '@mui/icons-material';

export interface ProductDetailProps {}

export function ProductDetail(props: ProductDetailProps) {
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
            Drools | 3KG
          </Typography>
        </Stack>

        <Stack flexGrow={0.5}>
          <Stack direction="row" alignItems="center" mt={1.5}>
            <Typography pr={2} color="#979697">
              Animals:
            </Typography>
            <Chip label="Dog" color="primary" size="small" />
          </Stack>

          <Stack direction="row" mt={1.5}>
            <Typography pr={2} color="#979697">
              Description:
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
              Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" mt={1.5}>
            <Typography pr={2} color="#979697">
              Price:
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
              $123.00
            </Typography>
          </Stack>
          <Stack direction="column" mt={2}>
            <Typography pr={2} color="#979697">
              Quantity:
            </Typography>
            <Stack direction="row" mt={2} spacing={0.5}>
              <IconButton size="small">
                <Add />
              </IconButton>
              <TextField
                id="outlined-size-small"
                defaultValue="1"
                size="small"
                InputProps={{ inputProps: { min: 1 } }}
                type="number"
                sx={{
                  width: '80px',
                }}
              />
              <IconButton size="small">
                <Remove />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" mt={1.5} alignItems="center">
          <Button variant="outlined" size="medium">
            Buy Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
