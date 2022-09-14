import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';
import { MainLayout } from '@/components/layouts';
import { ProductDetail } from '@/components/product/product-detail';
import { Product } from '@/models';

export interface ProductPageProps {
  product: Product;
}

const temProduct: Product = {
  _id: '6310282ccce2e6cf41b06875',
  name: 'Awesome Rubber Salad',
  description: 'The Football Is Good For Training And Recreational Purposes',
  price: 6391.73,
  pet_list: [
    {
      _id: '63101fb283926cd95f830a26',
      name: 'cow',
      description:
        'Et atque sunt ab esse excepturi ut quos delectus. Possimus dolor assumenda dicta sapiente quaerat nisi sed consequatur hic. In dolorem eos ut eum nam accusantium iure. Ipsam laborum deleniti ut.',
    },
  ],
  promotion_list: [],
  image_list: [],
};

function ProductPage({ product = temProduct }: ProductPageProps) {
  return (
    <Box>
      <Container>
        <ProductDetail product={product} />
      </Container>
    </Box>
  );
}

ProductPage.Layout = MainLayout;
export default ProductPage;
