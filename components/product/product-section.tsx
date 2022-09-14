import { ApiResponseData, Product } from '@/models';
import { Box, Container, Divider, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ProductList } from './product-list';

export interface ProductsSectionProps {
  productList?: Product[];
  pagination?: ApiResponseData<Product>['pagination'];
  onChangePagination?: Function;
}

export function ProductsSection({
  productList = [],
  pagination,
  onChangePagination,
}: ProductsSectionProps) {
  const [page, setPage] = useState(pagination?._page || 1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    onChangePagination?.(value);
  };

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
        <ProductList productList={productList} />
        <Stack justifyContent="center" p={4}>
          <Pagination
            sx={{
              margin: 'auto',
              fontFamily: 'Rubik',
            }}
            count={Math.ceil((pagination?._totalRows || 1) / (pagination?._limit || 1))}
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Container>
    </Box>
  );
}
