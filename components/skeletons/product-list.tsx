import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import ProductSkeleton from './product';

export interface ProductListSkeletonProps {
  productsPerRow?: number;
}

export default function ProductListSkeleton({ productsPerRow = 4 }: ProductListSkeletonProps) {
  const productNumber = 12 / productsPerRow;

  return (
    <Box>
      <Container>
        <Box py={5}>
          <Typography
            sx={{
              fontFamily: 'Pangolin',
              fontWeight: '500',
              fontStyle: 'normal',
              fontSize: '28px',
              lineHeight: '35px',
            }}
          >
            Dog Nutrients & Food
          </Typography>
          <Divider
            sx={{
              width: '7rem',
              height: '3px',
              bgcolor: '#3A8DA8',
            }}
          />
        </Box>
        <Grid container spacing={2}>
          {Array.from(new Array(4)).map((item, index) => (
            <Grid key={index} item md={productNumber}>
              <ProductSkeleton />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
