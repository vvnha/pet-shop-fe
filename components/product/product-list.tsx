import { Grid } from '@mui/material';
import * as React from 'react';
import { Product } from './product';

export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Product />
      </Grid>
      <Grid item md={3}>
        <Product />
      </Grid>
      <Grid item md={3}>
        <Product />
      </Grid>
      <Grid item md={3}>
        <Product />
      </Grid>
    </Grid>
  );
}
