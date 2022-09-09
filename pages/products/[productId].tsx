import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';
import { MainLayout } from '@/components/layouts';
import { ProductDetail } from '@/components/product/product-detail';

export interface ProductPageProps {}

function ProductPage(props: ProductPageProps) {
  return (
    <Box>
      <Container>
        <ProductDetail />
      </Container>
    </Box>
  );
}

ProductPage.Layout = MainLayout;
export default ProductPage;
