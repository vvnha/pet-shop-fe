import { Box, Container, Divider, Pagination, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { ProductList } from './product-list';

export interface ProductsSectionProps {}

export function ProductsSection(props: ProductsSectionProps) {
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
        <ProductList />
        <Stack justifyContent="center" p={4}>
          <Pagination
            sx={{
              margin: 'auto',
              fontFamily: 'Rubik',
            }}
            count={3}
            color="primary"
          />
        </Stack>
      </Container>
    </Box>
  );
}
