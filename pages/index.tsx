import Hero from '@/components/home/hero';
import { MainLayout } from '@/components/layouts';
import { ProductsSection } from '@/components/product';
import { ApiResponseData, NextPageWithLayout, Product } from '@/models';
import { productApi } from '@/services/products';
import { Box, Skeleton } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import _get from 'lodash/get';
import { useRouter } from 'next/router';
import ProductSkeleton from '@/components/skeletons/product';
import ProductListSkeleton from '@/components/skeletons/product-list';

const Home: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<ApiResponseData<Product>['pagination']>({
    _totalRows: 0,
    _page: 1,
    _limit: 4,
  });

  const router = useRouter();

  const page = router.query?._page;
  const limit = router.query?._limit;

  useEffect(() => {
    (async () => {
      if (!page) return;

      try {
        setIsLoading(true);

        const response = await productApi.getProductList({
          _page: page,
          _limit: limit,
        });

        const data = _get(response, 'values', []);
        const responsePagination = _get(response, 'pagination', {
          _totalRows: 0,
          _page: 1,
          _limit: 4,
        });

        setProductList(data);
        setPagination(responsePagination);
      } catch (error) {}
      setIsLoading(false);
    })();
  }, [router, page, limit]);

  const handleChangePagination = (page: number) => {
    router.push(
      {
        pathname: '/',
        query: {
          _page: Number(page) || 1,
          _limit: limit,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box>
      <Hero />
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <ProductsSection
          productList={productList}
          pagination={pagination}
          onChangePagination={handleChangePagination}
        />
      )}
    </Box>
  );
};

Home.Layout = MainLayout;

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
