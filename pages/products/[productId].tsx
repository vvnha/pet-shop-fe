import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';
import { MainLayout } from '@/components/layouts';
import { ProductDetail } from '@/components/product/product-detail';
import { Product } from '@/models';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { productApi } from '@/services/products';
import _get from 'lodash/get';

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

export const getStaticPaths: GetStaticPaths = async () => {
  type newQueryParam = {
    [indx: string]: string | number;
  };

  const queryParams: newQueryParam = { _page: 1, _limit: 10 };

  const searchQueryParams = new URLSearchParams();

  for (const key in queryParams) {
    searchQueryParams.append(key, queryParams[key].toString());
  }

  const response = await fetch(`${process.env.API_URL}/products?${searchQueryParams.toString()}`);

  const data = await response.json();

  const values = _get(data, 'values', []);

  return {
    paths: values.map((product: Product) => ({ params: { productId: product._id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async (
  context: GetStaticPropsContext
) => {
  const productId = context.params?.productId;
  if (!productId) return { notFound: true };

  const response = await fetch(`${process.env.API_URL}/products/${productId}`);

  const data = await response.json();

  const value = _get(data, 'value', temProduct);

  return {
    props: {
      product: value,
    },
    revalidate: 5,
  };
};

export default ProductPage;
