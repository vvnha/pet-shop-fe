import { Box, Button, Chip, CircularProgress, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/food1.png';
import { Product } from '@/models';
import { useRouter } from 'next/router';

export interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handDetailClick = () => {
    setIsLoading(true);
    router.push(`/products/${product._id}`);
  };

  return (
    <Box
      maxWidth="300px"
      p={3}
      height="625px"
      borderRadius="7px"
      boxShadow="hsla(240,5%,41%,.2) 0px 7px 29px 0px;"
    >
      <Box maxHeight="400px" overflow="hidden">
        <Image
          src={heroImg}
          height="400px"
          width="300px"
          objectFit="contain"
          layout="responsive"
          alt="avatar"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            mt: 2,
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </Typography>
        <Stack direction="row" alignItems="center" mt={2}>
          {product.pet_list.map((item) => (
            <Chip key={item._id} label={item.name} color="primary" size="small" sx={{ ml: 1 }} />
          ))}
        </Stack>
        <Typography
          sx={{
            mt: 1.5,
            height: '80px',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '20px',
            color: '#979697',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
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
            {`$${Number(product.price).toFixed(2)}`}
          </Typography>
        </Box>
      </Box>
      <Button
        sx={{
          mt: 1.5,
        }}
        variant="outlined"
        size="medium"
        onClick={handDetailClick}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Buy Now'}
      </Button>
    </Box>
  );
}
