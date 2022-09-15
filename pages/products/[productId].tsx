import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';
import { MainLayout } from '@/components/layouts';
import { ProductDetail } from '@/components/product/product-detail';
import { CartItemInputType, CartItemType, Product } from '@/models';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { productApi } from '@/services/products';
import _get from 'lodash/get';
import { useAuth } from '@/hooks';
import { User } from '@/models/user';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { isLoggedIn, profile, updateUser } = useAuth();

  if (router.isFallback) {
    return <Box>Loading...</Box>;
  }

  const handleAddToCart = async (cartItem: CartItemInputType) => {
    const cloneProfile: Required<User> = { ...profile };

    const itemIndex = cloneProfile.cart.findIndex((item) => item.product?._id === cartItem.product);
    let newCart = cloneProfile.cart.map((item) => ({
      product: item.product?._id,
      quantity: item.quantity,
    }));

    if (itemIndex > -1) {
      newCart[itemIndex].quantity += cartItem.quantity;
    } else {
      newCart.push(cartItem);
    }

    const payload = {
      cart: newCart,
    };

    try {
      await updateUser(payload);
      toast.success('Add to cart successfully!');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Box>
      <Container>
        <ProductDetail product={product} onAddToCart={handleAddToCart} />
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
