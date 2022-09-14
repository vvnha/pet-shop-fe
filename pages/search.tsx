import Filter from '@/components/common/filter';
import { MainLayout } from '@/components/layouts';
import { ProductList } from '@/components/product';
import { MS_PER_HOUR } from '@/constants';
import { FilterAltOutlined } from '@mui/icons-material';
import { Box, Container, Drawer, IconButton, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import _get from 'lodash/get';
import { FilterType } from '@/models';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks';
import ProductListSkeleton from '@/components/skeletons/product-list';

export interface SearchPageProps {}
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function SearchPage(props: SearchPageProps) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const router = useRouter();
  const [petList, setPetList] = useState([]);
  const [productList, setProductList] = useState([]);

  const petSearchParams = new URLSearchParams();
  petSearchParams.append('_page', '1');
  petSearchParams.append('_limit', '100');

  const page = router.query?._page;
  const limit = router.query?._limit;
  const text = router.query?.text || '';

  const { data, error, mutate, isValidating } = useSWR(`/pets?${petSearchParams.toString()}`, {
    dedupingInterval: MS_PER_HOUR,
    revalidateOnFocus: false,
  });

  const { searchData, isLoading } = useSearch({ filters: router.query });

  useEffect(() => {
    if (searchData) {
      const productItemList = _get(searchData, 'values', []);
      setProductList(productItemList);
    }
  }, [searchData]);

  useEffect(() => {
    if (data?.values) {
      setPetList(data.values);
    }
  }, [data]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleFilterChange = (filter: FilterType) => {
    router.push(
      {
        pathname: '/search',
        query: {
          ...filter,
          text,
          _page: Number(page) || 1,
          _limit: Number(limit) || 4,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box>
      <Container>
        <Stack direction="row" p={1}>
          <Stack
            direction="column"
            width="250px"
            display={{
              xs: 'none',
              md: 'block',
              lg: 'block',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Pangolin',
                fontWeight: '500',
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '35px',
                color: 'primary.main',
              }}
            >
              Filters
            </Typography>
            <Filter petList={petList} onFilterChange={handleFilterChange} />
          </Stack>
          <Stack flexGrow={1}>
            <Stack
              display={{
                xs: 'block',
                md: 'none',
                lg: 'none',
              }}
              direction="row"
            >
              <Stack direction="row" alignItems="center" justifyContent="flex-end">
                <IconButton onClick={toggleDrawer('right', true)} sx={{ color: 'primary.main' }}>
                  <FilterAltOutlined />
                  <Typography>Filters</Typography>
                </IconButton>
              </Stack>
            </Stack>
            <Stack justifyContent="center" p={4}>
              {isLoading ? (
                <ProductListSkeleton productsPerRow={3} totalNumber={6} />
              ) : (
                <ProductList productList={productList} productsPerRow={3} />
              )}
              <Pagination
                sx={{
                  margin: 'auto',
                  pt: 2,
                  fontFamily: 'Rubik',
                }}
                count={3}
                color="primary"
              />
            </Stack>
          </Stack>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            <IconButton>
              <Typography
                sx={{
                  fontFamily: 'Pangolin',
                  fontWeight: '500',
                  fontStyle: 'normal',
                  fontSize: '28px',
                  lineHeight: '35px',
                  color: 'primary.main',
                }}
              >
                Filters
              </Typography>
            </IconButton>
            <Filter petList={petList} onFilterChange={handleFilterChange} />
          </Drawer>
        </Stack>
      </Container>
    </Box>
  );
}

SearchPage.Layout = MainLayout;
