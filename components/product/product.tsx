import { Box, Button, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/food1.png';

export interface ProductProps {}

export function Product(props: ProductProps) {
  return (
    <Box
      maxWidth="400px"
      p={3}
      borderRadius="7px"
      boxShadow="hsla(240,5%,41%,.2) 0px 7px 29px 0px;"
    >
      <Box maxHeight="400px" overflow="hidden">
        <Image src={heroImg} layout="responsive" alt="avatar" />
      </Box>
      <Box>
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
        <Chip
          label="Dog"
          color="primary"
          size="small"
          sx={{
            mt: 2,
          }}
        />
        <Typography
          sx={{
            mt: 1.5,
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '20px',
            color: '#979697',
          }}
        >
          Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food
        </Typography>
        <Box mt={1.5}>
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
        </Box>
      </Box>
      <Button
        sx={{
          mt: 1.5,
        }}
        variant="outlined"
        size="medium"
      >
        Buy Now
      </Button>
    </Box>
  );
}